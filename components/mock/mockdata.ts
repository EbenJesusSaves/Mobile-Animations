const generateRandomData = () => {
  const names = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
    "Charlie Davis",
    "Eve White",
    "Frank Green",
    "Grace Hall",
    "Hank King",
    "Ivy Lee",
    "Jack Walker",
    "Kathy Young",
    "Liam Harris",
    "Mia Carter",
    "Noah Scott",
    "Olivia Adams",
    "Paul Wilson",
    "Quinn Martin",
    "Rose Clark",
    "Sam Baker",
  ];

  const descriptions = [
    "A passionate artist who finds inspiration in the smallest details of everyday life. Known for their unique perspective and dedication to their craft.",
    "Loves coding and tech, spending countless hours exploring new frameworks and technologies to create innovative solutions for modern challenges.",
    "An adventurer at heart, always seeking new places to explore and experiences to share with friends and loved ones.",
    "A skilled musician with a deep appreciation for melodies and rhythms. Their music has the power to connect people from different walks of life.",
    "A creative writer with a knack for storytelling, weaving intricate tales that captivate the imagination of readers.",
    "An avid traveler who enjoys immersing themselves in diverse cultures, tasting exotic cuisines, and meeting fascinating people.",
    "A fitness enthusiast dedicated to maintaining a healthy lifestyle and inspiring others to pursue their fitness goals.",
    "A dedicated teacher who goes above and beyond to nurture the minds of their students, making learning an engaging and fulfilling experience.",
    "A caring nurse who tirelessly works to ensure the well-being and comfort of their patients, embodying compassion and professionalism.",
    "A talented designer who blends functionality with aesthetics to create visually stunning and user-friendly designs.",
    "A motivated entrepreneur driven by a vision to innovate and bring meaningful change to their industry.",
    "A sports fanatic who thrives on the energy and excitement of competition, whether as a player or a devoted fan.",
    "A book lover who spends their days exploring the vast worlds hidden within the pages of novels and literature.",
    "A science geek with an insatiable curiosity about the universe, constantly seeking to unravel its mysteries.",
    "A gaming enthusiast who finds joy in exploring virtual worlds and challenging themselves with new games and strategies.",
    "A foodie with a refined palate, always on the hunt for the next culinary masterpiece to savor and share.",
    "A nature lover who cherishes the serenity of the outdoors, finding peace in the beauty of forests, mountains, and oceans.",
    "A movie buff who enjoys analyzing the intricate details of storytelling and cinematography in films across genres.",
    "A dog person who delights in the companionship and loyalty of their four-legged friends, cherishing every moment spent with them.",
    "A cat person who adores the grace and independence of their feline companions, finding comfort in their presence.",
  ];

  const randomPortraitUrl = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    "https://images.unsplash.com/photo-1502767089025-6572583495b4",
    "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    "https://images.unsplash.com/photo-1731052420744-a7a58c6ee466?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505245208761-ba872912fac0",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    "https://images.unsplash.com/photo-1524150380786-4a3c96f2c3c0",
    "https://images.unsplash.com/photo-1534395980697-c61c84dbed99",
    "https://images.unsplash.com/photo-1733356214560-be25f2df4714?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1733683321694-458cefa326f7?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1731466227081-b2478303505b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1731950912462-9caa3905627d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1734386011664-a17cc4ef6755?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const randomDate = () => {
    const start = new Date(2020, 0, 1).getTime();
    const end = new Date().getTime();
    return new Date(start + Math.random() * (end - start))
      .toISOString()
      .split("T")[0];
  };

  return Array.from({ length: 20 }, (_, index) => ({
    name: names[index % names.length],
    description: descriptions[index % descriptions.length],
    imageUrl: randomPortraitUrl[index],
    date: randomDate(),
  }));
};

export const data = generateRandomData();
console.log(data);
