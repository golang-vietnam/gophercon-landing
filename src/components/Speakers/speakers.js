import LazyImage from '@/components/LazyImage'
import React from 'react'

const speakers = [
  {
    avatar: props => (
      <LazyImage {...props} {...require('./images/1.png?sqip')} />
    ),
    name: 'Sau Sheong Chang',
    position: 'CEO Singapore Power Digital, founder GopherCon Singapore',
  },
  {
    avatar: props => (
      <LazyImage {...props} {...require('./images/2.png?sqip')} />
    ),
    name: 'Thang Le',
    position: 'SRE Engineer at Google',
  },
  {
    avatar: props => (
      <LazyImage {...props} {...require('./images/3.png?sqip')} />
    ),
    name: 'Yashish Dua',
    position: 'Platform Engineer at Postman',
  },
  {
    avatar: props => (
      <LazyImage {...props} {...require('./images/4.png?sqip')} />
    ),
    name: 'Thach Le',
    position: 'Engineer Manager at BEGROUP',
  },
  {
    avatar: props => (
      <LazyImage {...props} {...require('./images/5.png?sqip')} />
    ),
    name: 'Dinesh Kumar and Maulik Soneji',
    position: 'Product Engineers at GoJek',
  },
  {
    avatar: props => (
      <LazyImage {...props} {...require('./images/6.png?sqip')} />
    ),
    name: 'Doni Rubiagatra',

    position: 'Software Engineer at kumparan, Cofounder Golang Surabya',
  },
  {
    avatar: props => (
      <LazyImage {...props} {...require('./images/7.png?sqip')} />
    ),
    name: 'Ken Shaw',
    position: 'CTO Brank.as',
  },
  {
    avatar: props => (
      <LazyImage {...props} {...require('./images/8.png?sqip')} />
    ),
    name: 'Aditya Mukerjee',
    position: 'Software Engineer at Stripe',
  },
  {
    avatar: props => (
      <LazyImage {...props} {...require('./images/9.png?sqip')} />
    ),
    name: 'Thanh Nguyen',
    position: 'Software Engineer at Grab',
  },
  {
    avatar: props => (
      <LazyImage {...props} {...require('./images/10.png?sqip')} />
    ),
    name: 'Manh Dao',
    position: 'Software Engineer at MoneyForward',
  },
]
export default speakers
