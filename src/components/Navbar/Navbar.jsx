import logo from '../../assets/logo.svg';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Rules', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'About', href: '#', current: false },
];

/**
 *  utility function in JavaScript that is used to conditionally join class names together.
 */
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#354751]">
      <></>
    </Disclosure>
  );
}
