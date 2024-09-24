import React from 'react';
import { Path, Svg } from 'react-native-svg';

const CleaningScrubberIcon = ({
  size = 40,
  color = 'currentColor',
  strokeWidth = 10,
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 337.053"
      fill={color}
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <Path
        fillRule="nonzero"
        d="M37.022 160.47c-4.398-9.32-6.599-18.27-6.499-26.822.104-8.884 2.667-17.165 7.802-24.799l.315-.436c5.338-6.889 12.741-12.638 22.252-17.206 9.052-4.35 20.033-7.641 32.982-9.837a7.955 7.955 0 011.7-.1c18.865-.293 29.463-9.359 40.49-18.797 11.912-10.194 24.266-20.767 46.456-24.276 26.195-4.141 38.583 5.222 51.144 14.719 10.344 7.823 20.853 15.764 43.163 11.949l1.021-.109c11.419-1.006 25.056 4.65 36.453 15.184 9.937 9.184 18.431 22.205 22.353 37.746 5.633 22.315 1.187 33.089-4.35 46.506-2.188 5.301-4.58 11.097-6.382 18.436-2.12 8.639-3.105 17.277-3.252 25.884-.15 8.712.561 17.536 1.809 26.393l.05.467c.821 9.861-1.051 18.407-5.819 25.517-4.647 6.937-11.884 12.175-21.892 15.568a439.089 439.089 0 01-38.023 14.389c.706-5.866 1.059-11.673 1.191-17.229a419.162 419.162 0 0030.815-11.929l.657-.25c6.658-2.213 11.28-5.385 13.99-9.431 2.639-3.938 3.649-9.08 3.147-15.314-1.302-9.372-2.037-18.847-1.874-28.43.168-9.829 1.284-19.662 3.688-29.452 2.058-8.39 4.709-14.81 7.134-20.687 4.415-10.693 7.957-19.285 3.597-36.562-3.106-12.313-9.816-22.614-17.659-29.862-8.116-7.501-17.134-11.61-24.13-11.045-29.001 4.911-42.263-5.106-55.318-14.98-9.856-7.45-19.576-14.796-39.076-11.715-17.64 2.79-28.262 11.88-38.509 20.649-13.221 11.317-25.925 22.185-50.422 22.605-11.297 1.952-20.704 4.75-28.254 8.381-7.108 3.415-12.549 7.552-16.353 12.389-3.257 4.937-4.881 10.227-4.947 15.851-.07 6.047 1.622 12.67 4.99 19.82 2.726 5.424 6.237 10.712 9.849 16.153 5.068 7.63 10.323 15.55 14.676 25.356-5.807-1.021-11.462-.513-16.938 1.802-3.431-6.849-7.303-12.681-11.059-18.339-3.839-5.784-7.573-11.403-10.882-17.998l-.086-.159zm-1.863-91.25h-1.112C34.047 50.872 18.35 35.17 0 35.17v-1.11c18.348 0 34.047-15.715 34.047-34.06h1.112c0 18.348 15.7 34.047 34.047 34.047v1.112c-18.354 0-34.047 15.711-34.047 34.061zm88.201-24.95h-.658c0-10.809-9.266-20.067-20.073-20.067v-.663c10.798 0 20.073-9.252 20.073-20.055h.658c0 5.356 2.008 10.051 6.016 14.057 4.005 4.003 8.685 6.016 14.056 6.016v.658c-10.804 0-20.072 9.245-20.072 20.054zm128.683-5.206h-.515c0-4.166-1.564-7.82-4.679-10.938-3.118-3.118-6.76-4.682-10.941-4.682v-.512c4.169 0 7.823-1.566 10.941-4.682 3.115-3.13 4.679-6.772 4.679-10.929l.515.002c0 4.166 1.566 7.822 4.682 10.938 3.118 3.118 6.76 4.682 10.941 4.682v.515c-4.169 0-7.823 1.564-10.941 4.682-3.13 3.104-4.682 6.747-4.682 10.924zM118.335 243.342a5.891 5.891 0 01-.812-.499 808.368 808.368 0 01-10.048-8.115c-4.557-3.745-9.802-8.054-13.487-11.113-2.497-2.059-5.367-3.497-8.052-4.058-1.747-.313-3.309-.313-4.557.186-.998.441-1.872 1.251-2.435 2.499-.751 1.686-1.125 4.057-.937 7.305.186 2.871 1.187 5.991 2.498 9.052 1.936 4.43 4.619 8.554 6.618 11.175.125.186.249.311.313.499l39.516 56.434c.5.749.813 1.562.874 2.374.812 6.49 2.185 11.424 4.182 14.483 1.498 2.249 3.373 3.372 5.805 3.308h62.181c3.869-.061 7.366-1.184 10.611-3.433 3.558-2.435 6.744-6.243 9.677-11.363.063-.061.124-.186.188-.249a478.555 478.555 0 014.058-6.804c6.306-10.364 11.798-19.414 12.422-32.277l-.374-17.728c-.062-.249-.062-.499-.062-.749 0-.249 0-1.938.062-4.184.124-11.735.313-35.972-10.426-37.783h-6.928c-.064 3.309-.25 16.435-.438 19.68-.186 2.932-.375 5.68-.375 8.365a5.17 5.17 0 01-5.183 5.183 5.17 5.17 0 01-5.179-5.183c0-2.685.187-5.808.375-9.053.685-11.051 1.498-33.475-7.305-35.036h-6.867c-.375 0-.749-.061-1.124-.125.062 3.994-.188 15.947-.438 19.941-.186 2.936-.374 7.604-.374 10.289a5.167 5.167 0 01-5.181 5.181 5.17 5.17 0 01-5.183-5.181c0-2.685.188-7.727.374-10.975.69-11.049 1.5-31.555-7.303-33.114h-6.867c-.499 0-.934-.064-1.372-.188v27.994a5.17 5.17 0 01-5.181 5.184 5.173 5.173 0 01-5.184-5.184v-29.851c0-9.05-3.683-14.796-8.428-17.169-1.747-.874-3.62-1.31-5.43-1.31-1.811 0-3.683.436-5.431 1.31-4.684 2.373-8.304 8.119-8.304 17.419v72.478a5.169 5.169 0 01-5.181 5.181 5.171 5.171 0 01-5.183-5.181v-9.615h-.125zm48.447-71.307a4.86 4.86 0 011.372-.186h7.181c.374 0 .812.061 1.184.125 9.552 1.497 13.859 7.055 15.609 14.294a5.293 5.293 0 012.183-.499h7.18c.375 0 .813.061 1.187.125 10.299 1.624 14.422 7.929 15.92 15.919.249-.064.499-.064.81-.064h7.18c.375 0 .81.064 1.185.126 19.729 3.061 19.48 32.415 19.291 48.21v4.12l.438 18.23v.561c-.749 15.545-6.867 25.596-13.922 37.208a489.918 489.918 0 00-3.996 6.681c-.064.061-.064.125-.125.186-3.683 6.429-7.929 11.363-12.797 14.733-4.933 3.433-10.428 5.181-16.419 5.244h-62.117c-6.181.125-10.985-2.559-14.546-7.865-2.871-4.244-4.743-10.237-5.744-17.731l-38.704-55.311-.188-.188c-2.31-3.057-5.43-7.865-7.802-13.173-1.75-3.995-3.061-8.302-3.372-12.545-.313-5.059.374-9.053 1.808-12.239 1.75-3.931 4.621-6.493 8.055-7.866 3.183-1.309 6.805-1.497 10.427-.749 4.369.874 8.864 3.062 12.67 6.243 3.125 2.622 8.367 6.867 13.486 11.05l4.244 3.497v-49.628c0-13.798 6.118-22.662 14.047-26.659a22.173 22.173 0 0110.115-2.435c3.495 0 6.928.813 10.112 2.435 8.914 4.494 14.172 18.337 14.172 18.214l-.124-.063zm208.8 101.88c-4.933.057-8.982-3.896-9.038-8.83-.057-4.934 3.896-8.982 8.83-9.039 9.138-.127 20.458.24 32.488 2.628 12.349 2.453 25.53 7.024 38.118 15.302 4.121 2.71 5.267 8.249 2.557 12.371-2.709 4.121-8.249 5.267-12.37 2.557-10.319-6.785-21.332-10.575-31.741-12.642-10.732-2.132-20.762-2.458-28.844-2.347zm-3.247-70.947c-4.875-.851-8.14-5.496-7.289-10.371.851-4.874 5.496-8.14 10.371-7.289 24.18 4.291 42.076 9.804 57.87 18.064 15.818 8.276 29.114 19.101 44.148 34.049 3.502 3.482 3.518 9.148.037 12.65-3.482 3.501-9.148 3.517-12.65.036-13.829-13.75-25.866-23.605-39.804-30.899-13.961-7.303-30.262-12.259-52.683-16.24zm12.304-69.605c-4.874-.792-8.185-5.392-7.393-10.267.792-4.874 5.392-8.185 10.266-7.393 24.285 3.955 46.629 12.61 66.819 25.119 21.076 13.058 39.739 30.262 55.754 50.652 3.056 3.887 2.38 9.52-1.507 12.577-3.888 3.057-9.52 2.38-12.577-1.507-14.794-18.836-31.894-34.639-51.06-46.517-18.214-11.286-38.378-19.092-60.302-22.664z"
      />
    </Svg>
  );
};

export default CleaningScrubberIcon;
