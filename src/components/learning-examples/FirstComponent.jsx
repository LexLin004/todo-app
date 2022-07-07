/** example of writing a class component in different file and export,
 * this class component needed to be imported in App.js
 */
import React, { Component } from "react";

class FirstComponent extends Component {
  render() {
    return (
      <div className='firstComponent'>
        First Component
      </div>
    );
  }
}

// or write
export default FirstComponent;

/** default export can be imported directly using "import FirstComponent from './components/learning-examples/FirstComponent'"
 * However, if there is a second class component in this file, it should be written as
export class SecondComponent extends Component {
  render() {
    return (
      <div className='secondComponent'>
        Second Component
      </div>
    );
  }
}
 * Since it is not default, if you want to import it in App.js, you should import as "import {SecondComponent} from '.......'"
*/

/** You can also export a function component
 * eg:
 * in ThirdComponent.jsx
import React from "react";
export default function ThirdComponent() {
  return (
    <div className='thirdComponent'>
      Third Component
    </div>
  );
}
// or write
export default ThirdComponent;
 * in App.js
import ThirdComponent from ......
 */