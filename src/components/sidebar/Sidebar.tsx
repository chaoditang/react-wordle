import { Menu, Transition } from '@headlessui/react'
import {
  DocumentSearchIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  NewspaperIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import React, { Fragment } from 'react'

export const Sidebar = () => {
  return (
    <div className="fixed top-3 w-12 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <DotsCircleHorizontalIcon className="mr-3 h-6 w-6 cursor-pointer dark:stroke-white" />
          </Menu.Button>
        </div>
        <Transition as={Fragment} enter="transition ease-out duration-100">
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <DocumentSearchIcon className="mr-3 h-6 w-6 cursor-pointer dark:stroke-white" />
                    <span>Artiles</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <NewspaperIcon className="mr-3 h-6 w-6 cursor-pointer dark:stroke-white" />
                    <span>News</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <SearchCircleIcon className="mr-3 h-6 w-6 cursor-pointer dark:stroke-white" />
                    <span>Other Games</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <MailIcon className="mr-3 h-6 w-6 cursor-pointer dark:stroke-white" />
                    <span>Contact</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
