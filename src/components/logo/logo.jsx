import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  //  const theme = useTheme();

  // const PRIMARY_LIGHT = theme.palette.primary.light;

  // const PRIMARY_MAIN = theme.palette.primary.main;

  // const PRIMARY_DARK = theme.palette.primary.dark;

  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 132,
        height: 62,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <svg
        width="132"
        height="62"
        viewBox="0 0 132 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60.6405 59.8187V58.5016H63.2475C64.6935 58.5016 66.1175 58.4138 66.4461 58.2821C66.95 58.0845 67.651 56.965 67.651 56.3503C67.651 56.2186 66.4023 56.1089 64.8687 56.043C61.6701 55.9552 60.4214 55.5162 59.4136 54.1991C58.4277 52.9259 58.2525 52.0478 58.2306 48.6892V45.5502H59.9832H61.7359V48.4039C61.7359 51.4771 61.9988 52.5527 62.7874 52.9918C63.0503 53.1235 64.2334 53.2332 65.4383 53.2332H67.651L67.6949 49.4575L67.7606 45.6599L69.4694 45.5941L71.1563 45.5282V51.1917C71.1563 54.3088 71.0687 57.1845 70.9373 57.6016C70.5867 58.8748 69.6447 59.9943 68.4616 60.587C67.4101 61.0919 67.1472 61.1358 63.9924 61.1358H60.6405V59.8187Z"
          fill="#1F191A"
        />
        <path
          d="M43.574 55.8016C43.3987 55.5601 43.333 54.0893 43.3768 50.5771L43.4425 45.6599L45.1295 45.5941L46.8164 45.5282L46.8821 47.46L46.9478 49.3917L48.3719 49.3258C50.015 49.2161 50.2779 49.0624 51.68 46.977L52.6439 45.5502H54.5718C55.733 45.5502 56.4779 45.638 56.4779 45.7697C56.4779 46.1429 53.4107 50.599 53.1697 50.599C53.0383 50.599 53.2135 50.9283 53.5422 51.3234C54.6157 52.5308 56.5217 55.604 56.3683 55.8455C56.3026 55.9772 55.4701 56.0869 54.5061 56.0869H52.7535L51.5704 54.3747C50.9132 53.4308 50.1026 52.5308 49.7959 52.3991C49.4892 52.2454 48.7005 52.1356 48.0432 52.1356H46.8602L46.7945 54.0674L46.7287 55.9772L45.2828 56.043C44.2531 56.0869 43.7712 56.0211 43.574 55.8016Z"
          fill="#1F191A"
        />
        <path
          d="M76.8086 55.7797C75.5598 55.4504 74.8369 54.9894 74.1577 54.0675C73.2376 52.8382 73.0842 51.8943 73.1719 47.6356C73.2376 43.2892 73.3252 42.9819 74.7054 41.6429C75.8227 40.5233 77.1153 40.2599 80.9273 40.3258L84.1916 40.3916L84.2574 41.4453C84.3669 43.0917 84.2574 43.1356 80.8178 43.1356C77.9478 43.1356 77.7726 43.1575 77.3344 43.6405C77.0715 43.9258 76.7867 44.4527 76.721 44.8478L76.5895 45.5502H79.4814C81.0807 45.5502 82.7676 45.66 83.2277 45.7917C84.345 46.1429 85.528 47.1527 86.0976 48.2503C86.7768 49.5454 86.7768 51.8943 86.1195 53.1455C85.4185 54.4626 84.0383 55.5821 82.7238 55.8455C81.2998 56.1748 78.0793 56.1309 76.8086 55.7797ZM82.0008 53.1016C82.9429 52.7284 83.3591 50.2259 82.6581 49.1503C82.1542 48.36 81.475 48.1844 78.9118 48.1844H76.6333V49.721C76.6333 51.3894 77.0058 52.6187 77.663 52.9918C78.0793 53.2333 81.4093 53.3211 82.0008 53.1016Z"
          fill="#1F191A"
        />
        <path
          d="M92.4726 55.9546C92.2536 55.8668 92.1878 54.857 92.1878 52.0033V48.1837H89.997H87.8062V46.8666V45.5495L94.0062 45.5934L100.184 45.6593V46.8666V48.074L97.9497 48.1398L95.6931 48.2057L95.6493 52.0911L95.5836 55.9765L94.1596 56.0205C93.3709 56.0424 92.6041 55.9985 92.4726 55.9546Z"
          fill="#1F191A"
        />
        <path
          d="M105.224 55.8888C103.405 55.4058 102.047 54.1107 101.499 52.3107C101.083 50.8838 101.083 50.5326 101.521 49.0399C101.938 47.613 103.274 46.2081 104.61 45.813C105.728 45.4837 111.248 45.4618 112.366 45.791C114.118 46.3179 115.433 47.9642 115.74 49.9838C116.046 51.9814 116.2 51.9155 111.227 51.9155H106.845L106.911 50.774L106.976 49.6106L109.452 49.5448C110.788 49.5228 111.906 49.413 111.906 49.3033C111.906 49.2155 111.709 48.9521 111.446 48.7106C111.051 48.3594 110.635 48.2935 108.488 48.2935C105.552 48.2935 105.136 48.513 104.961 50.2253C104.807 51.4984 104.983 52.2228 105.596 52.7936C106.034 53.2107 106.363 53.2326 110.306 53.2326C113.943 53.2326 114.557 53.2765 114.688 53.5838C114.841 54.0009 114.031 54.9009 112.892 55.4936C112.147 55.8888 111.577 55.9546 108.948 56.0205C107.261 56.0424 105.596 55.9766 105.224 55.8888Z"
          fill="#1F191A"
        />
        <path
          d="M116.375 55.757C116.309 55.5814 117.054 53.4741 118.018 51.1033C119.31 47.9862 119.989 46.5813 120.471 46.1642C121.107 45.5715 121.173 45.5495 123.802 45.5495C126.825 45.5495 127.175 45.6813 127.876 47.0423C128.862 48.974 131.426 55.4936 131.316 55.779C131.228 55.9985 130.79 56.0863 129.695 56.0863C127.876 56.0863 127.811 56.0205 126.803 53.4521C125.401 49.874 124.678 48.4472 124.196 48.2935C123.276 48.0081 122.794 48.6447 121.37 52.1789C120.603 54.0448 119.88 55.6912 119.727 55.8448C119.354 56.218 116.528 56.1741 116.375 55.757Z"
          fill="#1F191A"
        />
        <path
          d="M39.1715 37.3412C39.1715 37.0558 39.4125 36.3094 39.7412 35.6948C40.9899 33.1923 41.1652 30.2288 40.245 27.4629C40.004 26.7605 39.8288 25.9702 39.8726 25.7068C39.9383 25.2897 40.0698 25.2458 41.5814 25.2897C43.5093 25.3336 45.744 25.8166 47.1899 26.4751C49.8846 27.7483 49.5779 30.5581 46.4231 33.7192C44.8019 35.3216 43.4874 36.2655 41.5814 37.2314C39.9383 38.0436 39.1715 38.0875 39.1715 37.3412Z"
          fill="#0085C1"
        />
        <path
          d="M11.4575 32.8396C5.78331 30.7981 2.16847 26.9126 0.678722 21.2272C0.196744 19.3832 0.109111 18.4832 0.0214787 14.5978C-0.175694 6.2562 0.963527 2.56834 4.31547 0.592693C5.23561 0.0439032 5.52041 0 7.51405 0C10.0554 0 10.7126 0.241467 14.3713 2.39272C18.9501 5.07082 24.931 10.0099 31.1967 16.2442C35.0744 20.1076 38.1854 23.554 38.5797 24.4541C38.9303 25.2004 38.4045 25.4858 36.3013 25.6614C35.3373 25.7492 33.1684 26.1004 31.4815 26.4517C25.9826 27.5931 21.6667 29.0639 16.6716 31.5225C14.7218 32.4664 13.013 33.2566 12.8377 33.2347C12.6844 33.2347 12.0709 33.0591 11.4575 32.8396Z"
          fill="#F40080"
        />
        <path
          d="M11.2377 61.6407C9.76982 60.8723 8.80587 59.4455 8.30198 57.2942C7.84191 55.3186 7.38184 50.9941 7.2723 47.5258C7.11894 43.4867 7.40375 41.6867 8.6087 39.25C9.4193 37.6037 11.7635 34.9695 12.6617 34.6841C12.9246 34.5963 13.7352 34.8378 14.7868 35.3207C20.5486 37.911 27.8659 39.1183 34.4603 38.5695C39.1048 38.1744 39.1048 38.2183 34.5698 43.9916C26.3762 54.4186 20.6801 59.7528 15.8822 61.5309C14.3486 62.1016 12.2016 62.1675 11.2377 61.6407Z"
          fill="#FFAA00"
        />
      </svg>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
