// Pages
import MainMenu from '../pages/MainMenu';
import Game from '../pages/Game';
import HighScore from '../pages/Highscore';

const router = {
  root: 'main-menu',
  routes: [
    {
      path: 'main-menu',
      component: MainMenu,
    },
    {
      path: 'game',
      component: Game,
    },
    {
      path: 'high-score',
      component: HighScore,
    },
  ],
};

export default router;
