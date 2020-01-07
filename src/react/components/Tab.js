import React from 'react'
import { Tab } from 'semantic-ui-react'
import "./Tab.css"

const panes = [
  {
    menuItem: 'Category 1',
    render: () => <Tab.Pane attached={false}>Category 1 Content <div className="boxes1"></div> </Tab.Pane>,
  },
  {
    menuItem: 'Category 2',
    render: () => <Tab.Pane attached={false}>Category 2 Content <div className="boxes2"></div> </Tab.Pane>,
  },
  {
    menuItem: 'Category 3',
    render: () => <Tab.Pane attached={false}>Category 3 Content <div className="boxes3"></div> </Tab.Pane>,
  },
]

export const MyTab = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)
  
  //export default MyTab