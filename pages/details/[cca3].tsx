import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/progress";

import DefaultLayout from "@/layouts/default";
import Detail from "@/components/detail";
import { fetchCountries } from "@/services/countries";
import Country from "@/config/interfaceCountries";

const DetailPage = () => {
  const router = useRouter();
  const { cca3 } = router.query;

  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cca3) {
      const getCountry = async () => {
        try {
          const countries = await fetchCountries();
          const selectedCountry = countries.find((c) => c.cca3 === cca3);

          if (!selectedCountry) throw new Error("Country not found");
          setCountry(selectedCountry);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unknown error occurred");
          }
        } finally {
          setLoading(false);
        }
      };

      getCountry();
    }
  }, [cca3]);

  if (loading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <CircularProgress aria-label="Loading..." size="lg" />
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  if (!country) return <div>No data found</div>;

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        <Detail country={country} setDetail={() => router.push("/")} />
      </section>
    </DefaultLayout>
  );
};

export default DetailPage;
