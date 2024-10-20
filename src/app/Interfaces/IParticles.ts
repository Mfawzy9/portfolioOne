export interface Ioptions {
  interactivity: {
    events: {
      onClick: {
        enable: boolean;
        mode: string;
      };
      onHover: {
        enable: boolean;
        mode: string;
      };
      resize: boolean;
    };
    modes: {
      push: {
        quantity: number;
      };
      repulse: {
        distance: number;
        duration: number;
      };
    };
  };
}
