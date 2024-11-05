interface Member {
    username: string;
    class: string;
    reputation: number;
    joinDate: number;
    lastActive: number;
    lastUpdated: number;
}

function newMember(username: string) {
    let member: Member = {username:username,class:"Test", reputation:0, joinDate:0, lastActive:0,lastUpdated:0};
    return member;
}

export function GET(request: Request) {
    return new Response(`Hello from ${process.env.VERCEL_REGION}`);
  }

  export function POST(request: Request) {
    const members = [newMember("test"),newMember("test2")];
    return new Response(JSON.stringify(members));
  }