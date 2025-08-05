import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Goals } from './Goals';
import { Memories } from './Memories';
import { Quote } from './Quote';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Icon = (props: {
  href: string;
  iconName: string;
  title: string;
}) => (
  <a href={props.href} className='flex self-start items-center' rel="noopener noreferrer">
    <i className={`text-2xl bi bi-${props.iconName}`}></i>
    <span className='font-semibold overflow-hidden'>{props.title}</span>
  </a>
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header className='p-6 border-b bg-transparent'>
        <div id="logo" className='text-4xl font-bold'>Time Capsule</div>
      </header>
      <div className="flex flex-1 overflow-hidden"> {/* > 6000px */}
        <nav className='flex flex-col border-r p-2'>
          <Icon href='/' iconName='house' title='Home' />
          <Icon href='/goals' iconName='check-square' title='Goals' />
          <Icon href='/memories' iconName='images' title='Memories' />
          <Icon href='/quotes' iconName='chat-left-quote' title='Qoutes' />
        </nav>
        <main className='flex-[3]'>
          <Routes>
            <Route path='/' element={Home} />
            <Route path='/goals' element={Goals} />
            <Route path='/memories' element={<Memories/>} />
            <Route path='/quotes' element={Quote} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);