import { useState } from "react";

import DefaultLayout from "@/layouts/default";
import Detail from "@/components/detail";
import Home from "@/components/home";

export default function IndexPage() {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        {showDetail ? <Detail setDetail={setShowDetail} /> : <Home setDetail={setShowDetail} />}
      </section>
    </DefaultLayout>
  );
}
