import React from "react";
import pure from "recompose/pure";
import SvgIcon from "@material-ui/core/SvgIcon";

let Logo = (props) => (
  <SvgIcon {...props}>
    <g>
      <g>
        <path
          d="M668.3,143.7c-3.1-3.6-6.9-6.4-11.5-8.6c-4.6-2.2-9.9-3.3-16.1-3.3c-5.1,0-9.9,0.8-14.5,2.5
			c-4.5,1.7-8.4,4.2-11.8,7.4c-3.4,3.3-6,7.2-7.9,11.9c-1.9,4.7-2.9,10-2.9,15.9c0,6,1,11.3,2.9,16c1.9,4.7,4.6,8.7,7.9,12
			c3.4,3.3,7.3,5.8,11.8,7.5c4.5,1.7,9.3,2.6,14.5,2.6c6.1,0,11.5-1.1,16.1-3.3s8.4-5.1,11.5-8.6c3.1-3.6,5.3-7.6,6.8-12.2
			c1.5-4.5,2.2-9.2,2.2-13.9c0-4.7-0.7-9.3-2.2-13.9C673.6,151.3,671.4,147.2,668.3,143.7z"
        />
        <path
          d="M455.1,143.7c-3.1-3.6-6.9-6.4-11.5-8.6c-4.6-2.2-9.9-3.3-16.1-3.3c-5.1,0-9.9,0.8-14.5,2.5
			c-4.5,1.7-8.4,4.2-11.8,7.4c-3.4,3.3-6,7.2-7.9,11.9c-1.9,4.7-2.9,10-2.9,15.9c0,6,1,11.3,2.9,16c1.9,4.7,4.6,8.7,7.9,12
			c3.4,3.3,7.3,5.8,11.8,7.5c4.5,1.7,9.3,2.6,14.5,2.6c6.1,0,11.5-1.1,16.1-3.3c4.6-2.2,8.4-5.1,11.5-8.6c3.1-3.6,5.3-7.6,6.8-12.2
			c1.5-4.5,2.2-9.2,2.2-13.9c0-4.7-0.7-9.3-2.2-13.9C460.5,151.3,458.2,147.2,455.1,143.7z"
        />
        <path
          d="M1184.1,143.1c-3.3-3.2-7.2-5.7-11.6-7.4c-4.4-1.8-9.1-2.7-14-2.7c-5,0-9.6,0.8-13.9,2.5
			c-4.3,1.7-8,4.1-11.2,7.3c-3.2,3.2-5.7,7-7.6,11.5c-1.9,4.5-2.8,9.6-2.8,15.2c0,5.5,0.9,10.4,2.8,15c1.9,4.5,4.4,8.4,7.6,11.7
			c3.2,3.3,6.9,5.8,11.2,7.6c4.3,1.8,8.9,2.7,13.9,2.7c4.9,0,9.5-0.9,14-2.6c4.4-1.7,8.3-4.2,11.6-7.4c3.3-3.2,5.9-7.1,7.9-11.6
			c1.9-4.5,2.9-9.6,2.9-15.3c0-5.5-1-10.4-2.9-15C1190,150.2,1187.4,146.3,1184.1,143.1z"
        />
        <polygon points="308.5,232.4 339.2,232.4 339.2,36.4 308.5,67.1 		" />
        <polygon points="521.6,232.4 552.4,232.4 552.4,36.4 521.6,67.1 		" />
        <path
          d="M464.7,124.4c-1.7-3.1-4-6-6.8-8.5c-2.8-2.5-6-4.7-9.4-6.4c-3.5-1.7-7.2-3.1-11.2-4c-4-0.9-8.1-1.4-12.3-1.4
			c-9.2-0.1-17.7,1.3-25.7,4c-7.9,2.8-14.8,6.9-20.7,12.4c-5.9,5.5-10.5,12.4-13.8,20.6c-3.3,8.2-5,17.7-5,28.5
			c0,11,1.6,20.7,4.8,29c3.2,8.3,7.7,15.3,13.5,20.9c5.7,5.6,12.6,9.8,20.5,12.7c7.9,2.8,16.5,4.2,25.7,4.1
			c3.5-0.1,7.2-0.6,11.2-1.5c4-0.9,7.9-2.3,11.7-4.2c3.8-1.9,7.2-4.2,10.4-6.9c3.1-2.7,5.6-5.9,7.3-9.6l1.6,18.2h29.2V107.1h-29.7
			L464.7,124.4z M462,183.6c-1.5,4.5-3.8,8.6-6.8,12.2c-3.1,3.6-6.9,6.4-11.5,8.6c-4.6,2.2-9.9,3.3-16.1,3.3
			c-5.1,0-9.9-0.9-14.5-2.6c-4.5-1.7-8.4-4.2-11.8-7.5c-3.4-3.3-6-7.3-7.9-12c-1.9-4.7-2.9-10-2.9-16c0-6,1-11.3,2.9-15.9
			c1.9-4.7,4.6-8.6,7.9-11.9c3.4-3.3,7.3-5.7,11.8-7.4c4.5-1.7,9.3-2.5,14.5-2.5c6.1,0,11.5,1.1,16.1,3.3c4.6,2.2,8.4,5.1,11.5,8.6
			c3.1,3.6,5.3,7.6,6.8,12.2c1.5,4.5,2.2,9.2,2.2,13.9C464.2,174.4,463.4,179.1,462,183.6z"
        />
        <path
          d="M677.8,124.4c-1.7-3.1-4-6-6.8-8.5c-2.8-2.5-6-4.7-9.4-6.4c-3.5-1.7-7.2-3.1-11.2-4c-4-0.9-8.1-1.4-12.3-1.4
			c-9.2-0.1-17.7,1.3-25.7,4c-7.9,2.8-14.8,6.9-20.7,12.4c-5.9,5.5-10.5,12.4-13.8,20.6c-3.4,8.2-5,17.7-5,28.5
			c0,11,1.6,20.7,4.8,29c3.2,8.3,7.7,15.3,13.5,20.9c5.7,5.6,12.6,9.8,20.5,12.7c7.9,2.8,16.5,4.2,25.7,4.1
			c3.5-0.1,7.2-0.6,11.2-1.5c4-0.9,7.9-2.3,11.7-4.2c3.8-1.9,7.2-4.2,10.4-6.9c3.1-2.7,5.6-5.9,7.3-9.6l1.6,18.2h29.2V107.1H679
			L677.8,124.4z M675.1,183.6c-1.5,4.5-3.8,8.6-6.8,12.2c-3.1,3.6-6.9,6.4-11.5,8.6s-9.9,3.3-16.1,3.3c-5.1,0-9.9-0.9-14.5-2.6
			c-4.5-1.7-8.4-4.2-11.8-7.5c-3.4-3.3-6-7.3-7.9-12c-1.9-4.7-2.9-10-2.9-16c0-6,1-11.3,2.9-15.9c1.9-4.7,4.6-8.6,7.9-11.9
			c3.4-3.3,7.3-5.7,11.8-7.4c4.5-1.7,9.3-2.5,14.5-2.5c6.1,0,11.5,1.1,16.1,3.3c4.6,2.2,8.4,5.1,11.5,8.6c3.1,3.6,5.3,7.6,6.8,12.2
			c1.5,4.5,2.2,9.2,2.2,13.9C677.4,174.4,676.6,179.1,675.1,183.6z"
        />
      </g>
      <g>
        <path
          fill="#18E7C4"
          d="M37.5,100.8c-0.8-0.8-0.9-1.8-0.9-2.1c0-0.3,0.3-1,1-1c0.7,0,1.3,0,2-0.9c0.6-0.9,1.4-2,1.7-2.5
			c0.3-0.6-0.4-1-1.8-0.3c0,0-6.1,3.3-8.2,5.3c-2.1,2-4.6,4.9-4.6,8.1s1.8,11.2,3.5,15.9c1.7,4.7,4.2,10.9,7,14.4
			c1,1.1,1.2,0.4,1.2-0.5c0-0.9,0.5-2.3-0.7-4.3c-1.2-2-1.1-2.3-1.1-2.8c0-0.5,0.3-1,1.4-1c1.1,0,1.2-0.3,0.7-1.4
			c-0.6-1-1.7-2.7-2.4-3.6c-0.7-1-0.7-2,0.4-2.3c1.1-0.4,0.7-0.8,0.1-1.3c-0.6-0.5-3.5-3.7-4.3-5.2c-0.8-1.4-0.8-1.6-0.8-2
			c0-0.5,0.4-1,1.4-1s2.1,0.6,3,0.8c0.9,0.2,2.2,0.2,1.5-0.8c-0.7-0.9-2.1-2.5-2.1-5.2c0-1.2,0.9-1.5,1.7-1.5c0.8,0,1.9,1.1,3.4,1.1
			s1.2-1.3,0.4-2.2C40.1,103.6,38.3,101.7,37.5,100.8z"
        />
        <path
          fill="#18E7C4"
          d="M135.7,0C60.8,0,0,60.8,0,135.7c0,75,60.8,135.7,135.7,135.7c75,0,135.7-60.8,135.7-135.7
			C271.5,60.8,210.7,0,135.7,0z M130.7,153c3.8-0.7,5.1-0.8,8-0.8c0,0,1.7,0,2.8,0c1.2,0,8.3,0.2,10.7,2.3c0.8,0.7,0.6,1.4-0.7,1.3
			c-1.2-0.1-6.3-1.1-9.8-1.1c-3.5,0-10,0.9-12.1,1.9c-2.1,1-3.6,2.8-4.4,4.4c-0.8,1.6-2,1.2-2.3,0.8c-0.3-0.4-1-2.5,0-3.9
			C123.9,156.5,126.9,153.6,130.7,153z M149.4,169.5c0.9,0.5,1.5,1.6,1.5,2.6c0,1.1-1.5,2.7-3.2,2.7c-2.2,0-3-2.3-3-3.5
			c0-1.2,0.3-1.8,0.8-2.3c0.5-0.6,2-2.2,2-2.2s2-1.4,1.9-2c-0.1-0.6,0.2-1,0.5-1c0.4,0,1,0.7,1,1.6c0,0.9-0.9,1.8-1.4,2.2
			C149,168.1,148.4,169.1,149.4,169.5z M130.4,168.2c-0.6-0.6-2.6-2.1-2.6-2.1c-1-0.8-0.8-1.2-0.7-1.3c0-0.2,0.7-0.6,2,0
			c2.7,1.6,3.6,2.7,4.3,3.9c0.7,1.2,0.7,2,0.7,3.4c0,1.4-1.2,2.5-2.5,2.5c-1.2,0-3-1.8-3-2.6c0-0.8,1-1.5,1.9-1.8
			C131.3,169.8,130.9,168.8,130.4,168.2z M107.9,192.5c-1.4,0-3-0.1-4.5,0.7c-1.4,0.8-3.2,1.8-5.1-0.5c-1.9-2.3-6-6.1-11.8-8.1
			c-5.7-2-13.1-3.8-13.1-4.9c0-1.1,3.2-0.7,4.4-0.7s1.9-0.6,0-2c-1.9-1.4-8.1-5.6-13.4-6.4c1-1.5,3.6-1.8,6.6-1.4
			c3,0.4,10,2.2,11.3,2.7c1.3,0.5,1.3-0.1,0.5-0.9c-0.7-0.8-4.3-4.5-8.4-6.9c-4.1-2.3-7.7-4.4-16.5-4.4c-7.3,0-14.2-1.4-18.4-3.4
			s-5.7-3.9-8-7.3c-2.3-3.4-9.6-14.3-11.9-22.8s-2.5-12.4-2.5-18c0-5.6,1-10.3,4.2-14.3s8.8-9.2,11.9-11.2c3.1-2,6.9-2,7.8-2
			c0.8,0,3.8,0.1,5.1,2.8c1.3,2.7,3.3,6.5,7.3,9.5c4.1,3,4.5,3.6,11.7,4.3c7.2,0.7,13.4,1.6,16.1,1.8c2.6,0.2,5.7,0.1,9.5,2.5
			c3.8,2.4,15.9,11.5,15.9,11.5s5.6-0.7,7.9,0.8c2.4,1.5,3.5,2.8,0.6,6.4c-2.9,3.6-5.1,5.6-7.9,5.6c-2.8,0-7.3-0.3-11.8-3.4
			c-4.5-3.1-10.8-8.1-17.9-10.7c-7-2.6-13.2-4.8-16.7-5.4c-0.4,2.4-1,7.2,0.4,11.1c1.4,3.9,4.1,8.1,11.5,9c7.5,0.9,26.2,6.6,30,8.7
			c3.8,2.1,9.3,5.5,13.7,7c4.5,1.5,7,0.5,7,3.5c0,3-1.1,6.4-3.8,9.7c-2.7,3.2-3.2,7-3.2,9.3c0,2.3,0.7,8.5,7,14.3
			c1.9,2.2,2,4.1-1.2,4.1c-3.2,0-10-0.5-11.6-0.3c-1.7,0.2-1.8,0.8-0.5,1.5c1.3,0.7,5.7,1.8,7.3,2.8c1.6,1,0.5,1.2-1,1.3
			c-1.5,0.1-6.1-0.4-7.3-0.4s-1.9,0.2-1.9,0.7c0,0.5,0.7,0.8,2.3,1.1c1.6,0.3,4.5,1.1,5.3,1.6c0.7,0.5,0.1,1.1-1.4,1
			C111.9,192.4,109.3,192.5,107.9,192.5z M74.8,120.9c1.2,1.1,4,2.4,5.7,2.4c2.6,0,4.3-2.5,4.4-3.3c0.1-0.9,0.4-1.4,0.8-1.4
			c0.3,0,1.1,0.4,1.1,1.2c0,0.8,0,1.6,0,1.6s1,0.5,1,1c0,0.6-0.5,1.3-1.4,1.8c-0.9,0.6-3,1.6-6.1,1.6c-4.1,0-6.9-2.9-8.2-4.3
			c-1.3-1.4-1.8-2.7-1.8-4.4c0-2.6,1.6-2.9,2.3-2.9c0.7,0,1-0.1,2.9,0.8c1.9,0.8,2,1.5,2,2.1c0,0.6-0.6,1-1.2,1
			c-0.6,0-0.7-0.1-1-0.5c-0.4-0.4-0.7-1.3-1.3-1.3c-0.6,0-0.6,1.2-0.6,1.9C73.3,118.8,73.6,119.7,74.8,120.9z M152.2,203.6
			c-2.5,0.2-2.4,0.7-2.4,1.3s0.5,0.9,2.3,0.9c1.8,0,4.5-0.2,4.5,1c0,1.2-0.6,1.4-2.8,1.4c-1,0-1.3,0.9-1.3,1.4
			c0,0.5,0.7,1.6,1.9,1.6c1.2,0,2.2,0,2.9-0.2c0.6-0.1,2.8-0.2,2.8,0.9c0,1-4.3,3.8-15.3,3.8c-11,0.1-15.2,0.4-20.2-1.8
			c-5-2.1-8.5-5.4-10.3-9.9c-1.7-4.5,0.1-4.1,1-4.1c0.9,0,0.9,0.4,3.1,0.4s4.9-0.1,4.9-0.1s30.8,0,32.7,0c1.9,0,6.1,0.2,6.1,1.3
			S159.1,203.3,152.2,203.6z M209.2,120.1c-1.6,2.5-5,5.7-9,5.7s-6.3-1.8-7.1-2.6c-0.8-0.8-0.6-1.2,0.2-1.6c0.8-0.4,0.1-1.4,0.6-2.3
			c0.5-1,1.2-1,1.6,0.5c0.4,2.2,2.4,3.4,4.4,3.4s4.8-1.4,6.4-3c1.6-1.7,0.6-3.8,0.6-3.8c-0.7-0.7-1.3,0.3-1.4,0.8
			c-0.1,0.5-0.7,1-1.3,1s-1.3-0.3-1.3-1.1c0-0.8,2-3,4.9-3S210.8,117.6,209.2,120.1z M242.2,135c-0.1-1.5-0.4-12-0.5-13.2
			c-0.1-1.2,0.2-1.3,0.8-1.9c0.6-0.6,1.1-2.5-0.8-4c-0.8-0.6-0.1-2.7,0.4-3.7c0.5-1-0.1-3.2,1.4-4s1.8-2.3,0.5-4
			c-1.4-1.7-2.1-4.1-0.6-4.5c1.4-0.3,2-0.9,0.3-2.2c-1.7-1.4-3.6-2.2-4.7-3.4c-1.1-1.2,0.2-1.8,1.4-1.8c1.2,0,4.7,2.7,4.7,2.7
			s8.7,5.5,9.2,10c0.6,4.5-4.7,25.2-9.6,30.7C242.9,137.6,242.3,136.5,242.2,135z"
        />
      </g>
    </g>
  </SvgIcon>
);
Logo = pure(Logo);
Logo.displayName = "Logo";
Logo.muiName = "SvgIcon";

export default React.memo(Logo);