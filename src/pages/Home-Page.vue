<script setup lang="ts">
import { ref } from 'vue';
import AppContainer from '@/components/layout/App-Container.vue';
import AppList from '@/components/list/App-List.vue';
import AppForm from '@/components/shared/App-Form.vue';
import AppListModal from '@/components/list/App-ListModal.vue';
import { useParcelsStore } from '@/store/parcels.ts';
import { getDetails } from '@/api/details';
import { playSound } from '../helpers/playSound.ts';
import { toast } from 'vue3-toastify';

const isFormShown = ref(false);
const isModalShown = ref(false);

const store = useParcelsStore();

const showForm = () => {
  isFormShown.value = !isFormShown.value;
};

const isNumberInList = () => {
  if (
    store.parcelsArray.some(item => item.number === store.currentParcelNumber)
  ) {
    playSound('error');
    store.setIsLoading(false);
    toast.warn('Посилка вже у списку', {
      autoClose: 2000,
    });
    return true;
  }
  return false;
};

const isLimitReached = () => {
  if (store.isLimit) {
    playSound('error');
    toast.warn('Ви досягли ліміту в списку посилок', {
      autoClose: 2000,
    });
    return true;
  }

  return false;
};

const toggleModal = () => {
  isModalShown.value = !isModalShown.value;
};

const checkIsEmptyListAndToggle = () => {
  if (store.parcelsArray.length === 0) {
    playSound('error');
    toast.warn('Немає що видаляти', {
      autoClose: 2000,
    });
    return;
  } else {
    toggleModal();
  }
};

const setDetailsData = async ({ documentNumber }: GetDetailsProps) => {
  if (isLimitReached()) return;
  if (isNumberInList()) return;

  playSound('click');

  try {
    store.setIsLoading(true);
    const data = await getDetails({
      documentNumber,
    });
    if (data) {
      const newObject: ParcelShortInfo = {
        number: data.Number,
        status: data.Status,
      };
      store.addParcel(newObject);
    }
    store.setIsLoading(false);
  } catch (e) {
    playSound('error');
    toast.error(e, {
      autoClose: 2000,
    });
    store.setIsLoading(false);
    store.setDetails(null);
  }
};
</script>

<template>
  <AppContainer>
    <div>
      <AppList
        :checkIsEmptyListAndToggle="checkIsEmptyListAndToggle"
        :showForm="showForm"
        :isFormShown="isFormShown"
      />
      <div :class="isFormShown ? 'wrapper-shown' : 'wrapper-hidden'">
        <AppForm
          :saveNumber="false"
          :class="isFormShown ? 'form-shown' : 'form-hidden'"
          :showPhone="false"
          :setDetailsData="setDetailsData"
        />
      </div>
    </div>
  </AppContainer>
  <teleport to="body">
    <AppListModal v-if="isModalShown" :toggleModal="toggleModal" />
  </teleport>
</template>

<style scoped>
.wrapper-shown {
  margin-top: 4px;
  overflow: visible;
  transition: var(--transition);
  transform: translateY(0);
  max-height: 100%;
}

.wrapper-hidden {
  overflow: hidden;
  transition: var(--transition);
  transform: translateY(-100%);
  visibility: hidden;
  max-height: 0;
}

.form-shown {
  transition: var(--transition);
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.form-hidden {
  transition: var(--transition);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
}
</style>
