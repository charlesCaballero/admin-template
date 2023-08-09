import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LinearLoader() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () =>
      usePathname() !== router.asPath && setLoading(true);
    const handleComplete = () =>
      usePathname() === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    !loading && (
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: 0,
          zIndex: 9999,
        }}
      >
        <LinearProgress
          sx={{
            height: 5,
          }}
          color="primary"
        />
      </Box>
    )
  );
}
