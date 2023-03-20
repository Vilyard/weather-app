import React from "react";


const ListData = (props: any) => {
  return (
   <ul>
      <li>{props.props.name}</li>
        <li>{props.props.sys.country}</li>
        {/* <li>{props.props.coord.lon}</li>
        <li>{props.props.coord.lat}</li> */}
        <li>{props.props.timezone}</li>
        <li>{props.props.weather[0].main}</li>
        <li>{props.props.weather[0].description}</li>
   </ul>
  );
};

export default ListData;
