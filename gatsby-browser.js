import ReactGA from 'react-ga';
ReactGA.initialize('UA-108370636-1');

exports.onClientEntry = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
