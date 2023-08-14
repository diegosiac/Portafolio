import { useEffect, useRef, useState } from 'react';

const useObserver = (options) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);
    
  const observer = useRef(new IntersectionObserver((entries) => {
    setEntries(entries);
  }, options));

  useEffect(() => {
    const currentObserver = observer.current;
    currentObserver.disconnect();
    if (elements.length > 0) {
      elements.forEach(element => currentObserver.observe(element))
    }
    return () => {
        if(currentObserver) {
            currentObserver.disconnect();
        };
    };
  },[elements]);

    return [observer.current, setElements, entries];
};

export default useObserver;