const throttle = (timerId, func, arg, deplay) => {
  if (timerId) return;

  timerId = setTimeout(() => {
    func(arg);

    timerId = undefined;
  }, deplay);
};

export default throttle;
