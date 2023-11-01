import { cls } from '@/_libs/utils';
import Link from 'next/link';
import React from 'react';

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div>
      <header className="bg-white w-full justify-center text-lg font-medium py-3 fixed text-gray-700 border-b top-0 flex items-center">
        {title ? <span>{title}</span> : null}
      </header>
      <div className={cls('pt-16', hasTabBar ? 'pb-16' : '')}>{children}</div>
      {hasTabBar ? (
        <nav className="bg-white text-gray-800 border-t fixed bottom-0 pb-10 pt-3 flex justify-betwen items-center"></nav>
      ) : null}
    </div>
  );
}