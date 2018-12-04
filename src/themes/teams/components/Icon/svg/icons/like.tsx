import * as React from 'react'
import { TeamsSvgIconSpec } from '../types'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path
        className={classes.outlinePart}
        d="M22.462 15.172c-.183-.647-.929-1.755-2.568-1.808a16.288 16.288 0 0 0-.538-.008c-.155 0-.308.002-.463.003-.151.001-.302.003-.457.003h-.042c.379-.913.601-2.115.571-2.644C18.847 8.714 17.883 8 17.019 8c-.888 0-1.071.736-1.402 2.072-.069.278-.171.691-.222.833-.203.33-1.415 2.038-3.058 4.307-.277.382-.357.88-.214 1.331l1.747 5.51a1.502 1.502 0 0 0 1.378 1.046l2.233.077.034.001c.298 0 2.938-.053 3.721-1.88.052-.123.06-.141 1.242-5.641a1.003 1.003 0 0 0-.016-.484zm-2.145 5.73c-.545 1.274-2.801 1.274-2.801 1.274l-2.233-.077a.498.498 0 0 1-.459-.349l-1.747-5.51a.497.497 0 0 1 .071-.443c.618-.854 2.986-4.131 3.144-4.447.182-.363.545-2.35.727-2.35.575 0 .892.831.948 1.776.025.441-.256 1.847-.682 2.587-.208.362-.805.999 1.151.999.314 0 .615-.006.92-.006.167 0 .334.002.506.007 1.345.044 1.638 1.081 1.638 1.081s-1.162 5.407-1.183 5.458zM10.605 15.921a.5.5 0 1 0-.952.304l2.371 7.427a.498.498 0 0 0 .628.324.5.5 0 0 0 .324-.628l-2.371-7.427z"
      />
      <path
        className={classes.filledPart}
        d="M21.981 15.308c-.016-.057-.412-1.389-2.103-1.444a15.34 15.34 0 0 0-.522-.008c-.153 0-.305.001-.458.003-.152.001-.306.003-.462.003-.444 0-.694-.036-.83-.068l.038-.06a4.03 4.03 0 0 0 .074-.122c.458-.796.78-2.303.748-2.865-.082-1.386-.636-2.247-1.447-2.247-.497 0-.603.426-.917 1.692-.081.328-.205.825-.258.934-.115.214-1.363 1.975-3.102 4.378a1.001 1.001 0 0 0-.142.887l1.747 5.51a1 1 0 0 0 .919.697l2.233.077h.003c.152 0 2.612-.028 3.276-1.577.026-.06.041-.096 1.212-5.55a.513.513 0 0 0-.009-.24zM10.605 15.921a.5.5 0 1 0-.952.304l2.371 7.427a.498.498 0 0 0 .628.324.5.5 0 0 0 .324-.628l-2.371-7.427z"
      />
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec
