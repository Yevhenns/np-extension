import { useSettingsStore } from '@/store/settings';
import clickSound from '../assets/sounds/click.mp3';
import failSound from '../assets/sounds/fail.mp3';

const audioClick = new Audio(clickSound);
const audioFail = new Audio(failSound);

export const playSound = (type: 'click' | 'error') => {
  const store = useSettingsStore();

  if (!store.isSoundOn) return;
  if (type === 'click') audioClick.play();
  if (type === 'error') audioFail.play();
};
