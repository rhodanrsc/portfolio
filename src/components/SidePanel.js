import * as React from 'react';
import SideButton from './SideButtons';
import Sections from './Sections';
import info from '../Info.json';
import { useEffect, useState } from 'react';

var closed = true;

function sideOpen() {
    document.getElementById("side").style.width = "150px";
    closed = false;
}

function sideClose() {
  document.getElementById("side").style.width = "100px";
  closed = true;
}

const SidePanel = () => {
  const headings = info.info.buttons;

  return(
    <div id='side' className='sidepanel' onMouseOver={sideOpen} onMouseLeave={sideClose}>
      {headings.map((b) => {
        return(
        <SideButton 
          name = {b}
          toggle = {sideOpen}
        />
        )
      })}
    </div>
  );
}

export default SidePanel;
