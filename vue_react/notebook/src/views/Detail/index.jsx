import React, { useEffect, useState } from 'react';
import {
  useLocation,
  useParams
} from 'react-router-dom'
import qs from 'query-string';
import { getBillDetail } from '@/api';
import s from './style.module.less';
import AppHeader from '@/components/AppHeader';
import CustomIcon from '@/components/CustomIcon';
import { typeMap } from '@/utils'; // 全局配置
import cx from 'classnames'; // 类名绑定

const Detail = () => {
  const location = useLocation();
  // ?id=1 querystring
  // console.log(qs.parse(location.search));
  // const { id } = qs.parse(location.search);
  const { id } = useParams();
  console.log(id);
  const [detail, setDetail] = useState({});

  const getDetail = async () => {
    const result = await getBillDetail(id);
    // console.log(result);
    setDetail(result.data)
  } 

  useEffect(() => {
    getDetail();
  }, [])
  return (
    <div className={s.detail}>
      <AppHeader title="账单详情"/>
      <div className={s.card}>
        <div className={s.type}>
          <span className={cx({[s.expense]: detail.pay_type==1,[s.income]: detail.pay_type==2})}>
            <CustomIcon 
              className={s.iconfont} 
              type={detail.type_id?typeMap[detail.type_id].icon:1}
            />
          </span>
          <span>{detail.type_name}</span>
        </div>
      </div>
    </div>
  )
}

export default Detail;