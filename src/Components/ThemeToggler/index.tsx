import { SunIcon, MoonIcon } from '@public/dummyData/Icons';
import { useTheme } from '@src/utils/hooks/useTheme';
import { Button } from '@src/Components/Button';

const styles = {
  theme_toggler:
    'flex flex-col items-center justify-center h-5 w-5 rounded-full pr-0 pl-0 bg-white dark:bg-white'
};

export const ThemeToggler = () => {
  const { theme, onToggleTheme } = useTheme();

  return (
    <Button onClick={onToggleTheme} bgColor="transparent" styles={styles.theme_toggler}>
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
