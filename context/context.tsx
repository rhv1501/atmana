import React, { Dispatch, SetStateAction } from "react";

interface TimerContextType {
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}
export const TimerContext = React.createContext<TimerContextType>({
  duration: 60,
  setDuration: () => {},
});

interface TimerProviderProps {
  children: React.ReactNode;
}

const TimerProvider = ({ children }: TimerProviderProps) => {
  const [duration, setDuration] = React.useState<number>(10);

  return (
    <TimerContext.Provider value={{ duration, setDuration }}>
      {children}
    </TimerContext.Provider>
  );
};
export default TimerProvider;
