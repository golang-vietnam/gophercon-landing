import React from 'react'

export default function FloatingButton(props) {
  return (
    <a {...props}>
      <button
        className="fixed bottom-0 right-0 m-5 border border-solid border-gray-200 rounded-full w-20 h-20 flex items-center justify-center bg-white"
        style={{ animation: 'shadow-pulse 3s infinite', zIndex: 10 }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.001 512.001"
          className="w-12 h-12 fill-current text-secondary"
          style={{
            transform: 'rotate(-25deg)',
            animation: 'wave-animation 3s infinite',
          }}
        >
          <g>
            <g>
              <path
                d="M501.388,273.415c-8.446-1.493-14.576-8.818-14.576-17.416s6.129-15.922,14.575-17.415
			c6.149-1.088,10.613-6.41,10.613-12.653v-59.196c0-6.408-4.738-11.884-11.023-12.737c-12.751-1.73-22.366-12.758-22.366-25.693
			c0.006-3.493-1.341-6.769-3.794-9.224c-2.419-2.423-5.639-3.759-9.063-3.759H46.244c-3.425,0-6.644,1.335-9.063,3.759
			c-2.451,2.455-3.799,5.731-3.793,9.268c0,12.893-9.615,23.92-22.366,25.65C4.739,154.852,0,160.327,0,166.735v59.196
			c0,6.244,4.463,11.565,10.613,12.653c8.446,1.493,14.576,8.818,14.576,17.416s-6.13,15.923-14.576,17.416
			C4.463,274.504,0,279.825,0,286.069v59.196c0,6.408,4.739,11.884,11.023,12.737c12.751,1.73,22.366,12.758,22.366,25.693
			c-0.006,3.493,1.341,6.769,3.793,9.224c2.419,2.423,5.639,3.759,9.063,3.759h73.402c4.143,0,7.501-3.358,7.501-7.501
			c0-4.144-3.359-7.501-7.501-7.501H48.342c-0.914-18.844-14.815-34.781-33.339-38.224v-55.628
			c14.7-3.44,25.189-16.546,25.189-31.824c0-15.278-10.489-28.384-25.189-31.825v-55.628c18.505-3.439,32.396-19.347,33.337-38.224
			h415.319c0.914,18.844,14.815,34.781,33.34,38.224v55.628c-14.701,3.439-25.19,16.545-25.19,31.824
			c0,15.279,10.488,28.385,25.19,31.824v55.628c-18.506,3.438-32.397,19.347-33.337,38.224H166.319
			c-4.143,0-7.501,3.358-7.501,7.501c0,4.144,3.359,7.501,7.501,7.501h299.436c3.425,0,6.644-1.335,9.063-3.759
			c2.452-2.455,3.8-5.731,3.794-9.267c0-12.893,9.615-23.92,22.367-25.65c6.283-0.854,11.022-6.329,11.022-12.737v-59.196
			C512.001,279.825,507.537,274.503,501.388,273.415z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M426.554,151.11h-95.042c-4.144,0-7.501,3.357-7.501,7.501s3.358,7.501,7.501,7.501h92.542v179.776H87.946V166.112
			h196.058c4.144,0,7.501-3.357,7.501-7.501s-3.358-7.501-7.501-7.501H85.445c-6.894,0-12.502,5.608-12.502,12.502v184.777
			c0,6.894,5.608,12.502,12.502,12.502h341.109c6.894,0,12.502-5.608,12.502-12.502V163.612
			C439.056,156.718,433.449,151.11,426.554,151.11z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M146.436,217.077h-33.843c-3.747,0-6.795,3.164-6.795,7.052s3.048,7.052,6.795,7.052h9.87v51.49
			c0,3.923,3.068,6.881,7.138,6.881c4.002,0,7.137-3.022,7.137-6.881v-51.49h9.699c3.875,0,6.796-3.068,6.796-7.137
			C153.232,220.137,150.247,217.077,146.436,217.077z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M169.084,217.077c-4.069,0-7.138,2.921-7.138,6.796v58.798c0,3.858,3.135,6.881,7.138,6.881
			c4.069,0,7.137-2.958,7.137-6.881v-58.798C176.221,219.999,173.152,217.077,169.084,217.077z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M227.027,263.312c-3.81,0-6.6,2.461-7.012,6.149c-0.649,4.056-1.099,6.499-7.517,6.499c-6.293,0-8.416-2.231-8.416-8.844
			v-27.091c0.001-5.6,1.336-8.843,8.161-8.843c6.395,0,7.52,3.006,7.735,5.983c0.107,3.826,3.075,6.58,7.135,6.58
			c3.451,0,7.137-2.054,7.137-7.82c0-9.365-7.559-18.847-22.008-18.847c-13.838,0-22.436,8.793-22.436,22.949v27.091
			c0,14.154,8.498,22.948,22.179,22.948c14.616,0,22.265-9.481,22.265-18.846C234.25,265.389,230.519,263.312,227.027,263.312z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M290.601,278.551l-19.355-29.187l16.55-20.631c1.121-1.144,1.75-2.715,1.75-4.433c0-3.849-3.416-7.224-7.309-7.224
			c-2.199,0-4.215,0.995-5.45,2.677l-17.239,21.731v-17.612c0-3.875-3.068-6.796-7.137-6.796c-4.069,0-7.138,2.921-7.138,6.796
			v58.798c0,3.858,3.135,6.881,7.138,6.881c4.069,0,7.137-2.958,7.137-6.881v-18.665l2.321-2.888l16.862,25.225
			c1.327,2.064,3.494,3.294,5.814,3.294c4.008,0,7.394-3.268,7.394-7.137C291.939,281.025,291.468,279.647,290.601,278.551z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M337.36,275.448H314.16v-15.21h8.587c3.812,0,6.796-3.021,6.796-6.88c0-3.955-2.984-7.052-6.796-7.052h-8.587V231.18
			h23.201v0.001c3.812,0,6.796-3.135,6.796-7.137c0-3.972-2.921-6.967-6.796-6.967h-30.425c-3.955,0-7.052,3.022-7.052,6.882v58.712
			c0,3.858,3.097,6.881,7.052,6.881h30.425c3.875,0,6.796-2.995,6.796-6.967C344.156,278.583,341.172,275.448,337.36,275.448z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M388.724,217.077h-33.843c-3.748,0-6.796,3.164-6.796,7.052s3.048,7.052,6.796,7.052h9.87v51.49
			c0,3.923,3.068,6.881,7.137,6.881c4.003,0,7.138-3.022,7.138-6.881v-51.49h9.698c3.875,0,6.796-3.068,6.796-7.137
			C395.521,220.137,392.535,217.077,388.724,217.077z"
              />
            </g>
          </g>
        </svg>
      </button>
    </a>
  )
}
