import * as React from 'react';

function MarkerInfo(props) {
  const {info} = props;
  const displayName = `${info.name}`;

  return (
    <div className='info'>
      <div className='name'>
        {displayName}
      </div>
      <div className='address'>
        Địa chỉ: {info.formatted_address}
      </div>
      {info.image && <img width={248} src={info.image} />}
    </div>
  );
}

export default React.memo(MarkerInfo);