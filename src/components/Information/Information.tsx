import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

export default function InformationWrapper() {
  return (
    <div className="bg-[url('/Background-page1.svg')] bg-cover bg-center bg-no-repeat px-6 py-12 rounded-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}
