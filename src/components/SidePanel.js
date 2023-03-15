import * as React from 'react';
import SideButton from './SideButtons';
import info from '../Info.json';

function sideOpen() {
  if (window.screen.width >= 820) {
    document.getElementById("side").style.width = "150px";
  }
}

function sideClose() {
  if (window.screen.width >= 820) {
    document.getElementById("side").style.width = "100px";
  }
}

const SidePanel = () => {
  const headings = info.buttons;

  return(
    <div id='side' className='sidepanel' onMouseOver={sideOpen} onMouseLeave={sideClose}>
      {headings.map((b) => {
        return(
        <SideButton 
          name = {b}
          key = {b+b.length}
          toggle = {sideOpen}
        />
        )
      })}
    </div>
  );
}

export default SidePanel;
