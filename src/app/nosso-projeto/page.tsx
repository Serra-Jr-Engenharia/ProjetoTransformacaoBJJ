import React from "react";

import Image2 from "@/components/Image/Image2";
import Text from "@/components/Project/Text";
import Card1 from "@/components/Project/Card1";
import Card2 from "@/components/Project/Card2";
import Card3 from "@/components/Project/Card3";
import Card4 from "@/components/Project/Card4";


export default function Nosso_projeto() {
  return (
    <div className="overflow-hidden">
      <section>
        <Image2 />
      </section>
      
      <section>
        <Text />
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </section>
      
    </div>
  );
}
