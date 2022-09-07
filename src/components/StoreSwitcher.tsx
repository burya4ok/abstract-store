import {RadioGroup} from '@headlessui/react';
import {useCallback, useState} from 'react';
import {initialStore, setStore, SupportedStores} from '../utils/store-switcher';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export const StoreSwitcher = () => {
  const [selectedStore, setSelectedStore] = useState(initialStore);

  const handleOnSelectStore = useCallback((store: string) => {
    setSelectedStore(store);
    setStore(store);
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border px-3 pt-4 pb-6  mb-6">
      <div className="flex pb-2">
        <h2 className="text-m font-medium text-gray-900">Select Prefered Store:</h2>
      </div>
      <RadioGroup value={selectedStore} onChange={handleOnSelectStore} className="mt-2">
        <RadioGroup.Label className="sr-only"> Choose a store </RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {SupportedStores.map((option) => (
            <RadioGroup.Option
              key={option}
              value={option}
              className={({active, checked}) =>
                classNames(
                  active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                  checked
                    ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                  'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 self-center cursor-pointer focus:outline-none'
                )
              }
            >
              <RadioGroup.Label as="span">{option}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};
