'use client'
import { client } from '@/lib/client';
import { useMutation } from '@tanstack/react-query';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const USER_NAME = "x-user-name";
  const [userName, setUserName] = useState<string | null>(null);
  const random_names = ["mango", "apple", "horse", "duck", "monkey", "bear", "fox"];
  const router = useRouter();
  const generateRandomName = () => {
    return `anonymous-${random_names[Math.floor(Math.random() * random_names.length)]}-${nanoid(5)}`
  }

  const { mutate: createRoom } = useMutation({
    mutationKey: ["createdRoom"],
    mutationFn: async () => {
      const res = await client.v1.room.create.post();
      if (res.status === 200) {
        router.push(`/room/${res.data?.roomId}`)
      }
    }
  })

  useEffect(() => {
    const getUserName = () => {
      const userName = localStorage.getItem(USER_NAME);
      if (userName) {
        setUserName(userName);
        return;
      }
      const generated = generateRandomName();
      localStorage.setItem(USER_NAME, generated);
      setUserName(generated);
    }
    getUserName()
  }, [])

  return (

    <main className='flex justify-center items-center h-screen w-screen'>
      <div className="flex flex-col space-y-8 max-w-md w-full">
        <section className='text-center'>
          <h1 className='text-green-500 text-2xl'>{">"}Private_chat</h1>
          <p className='text-zinc-500'>A private, self-destructing chat room.</p>
        </section>
        <div className='max-w-lg w-full bg-zinc-900/50 border border-zinc-800 p-3 flex justify-center items-center flex-col'>
          <div className="flex-1 space-y-5 p-3  w-full">
            <h3 className='text-center text-zinc-500'>Your Identity</h3>
            <div className="p-3 select-none w-full text-zinc-500 bg-zinc-950 flex-1 border border-zinc-800">
              <p>{userName}</p>
            </div>
            <button onClick={() => createRoom()} className='w-full py-3 font-bold flex items-center text-sm justify-center bg-zinc-200 text-zinc-950 cursor-pointer active:scale-95 transition-all '>CREATE ROOM</button>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Page