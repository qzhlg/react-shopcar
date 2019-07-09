import React, { Component } from 'react'
import { Table } from 'antd';
import 'antd/dist/antd.css'
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  
  const data = [];
 class Tabl extends Component {
         state = {
        selectedRowKeys: [], // Check here to configure the default column
        datacon:[
            {
                name:"秦俊杰",
                age:"28",
                address:"北京"
            },
            {
                name:"秦俊杰",
                age:"28",
                address:"北京"
            },
            {
                name:"秦俊杰",
                age:"28",
                address:"北京"
            },
            {
                name:"秦俊杰",
                age:"28",
                address:"北京"
            }
        ]
      };
      onSelectChange = selectedRowKeys => {
        
        this.setState({ selectedRowKeys });
      };
      render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
          selectedRowKeys,
          onChange: this.onSelectChange,
          hideDefaultSelections: true,
          selections: [
            {
              key: 'all-data',
              text: 'Select All Data',
              onSelect: () => {
                this.setState({
                  selectedRowKeys: [...Array(46).keys()], // 0...45
                });
              },
            },
            {
              key: 'odd',
              text: 'Select Odd Row',
              onSelect: changableRowKeys => {
                let newSelectedRowKeys = [];
                newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                  if (index % 2 !== 0) {
                    return false;
                  }
                  return true;
                });
                this.setState({ selectedRowKeys: newSelectedRowKeys });
              },
            },
            {
              key: 'even',
              text: 'Select Even Row',
              onSelect: changableRowKeys => {
                let newSelectedRowKeys = [];
                newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                  if (index % 2 !== 0) {
                    return true;
                  }
                  return false;
                });
                this.setState({ selectedRowKeys: newSelectedRowKeys });
              },
            },
          ],
        };
        return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
      }
}
export default Tabl