import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page,  Edit, Search, Toolbar, Inject} from'@syncfusion/ej2-react-grids'
import { employeesData, ContextMenuItems,employeesGrid } from '../data/dummy'
import { Header } from '../components'

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Page' title='Employees' />
    <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      allowFiltering
      toolbar={['Search']}
      width='auto'
      
    >
      <ColumnsDirective>
        {
          employeesGrid.map((item, index)=> 
          <ColumnDirective key={index} {...item} />)
        }
      </ColumnsDirective>
      <Inject services={[ Edit, Search, Page, Toolbar ]} />
    </GridComponent>
  </div>
  )
}

export default Employees