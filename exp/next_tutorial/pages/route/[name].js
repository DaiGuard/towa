import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router";

export default function Name() {
  const router = useRouter();

  return (    
    <div>
      <h1>商品:{router.query.name}です</h1>
      <h1>色:{router.query.color}です</h1>
    </div>
  );
}