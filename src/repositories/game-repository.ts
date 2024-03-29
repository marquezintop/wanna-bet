import { prisma } from "../config/database";

async function create(homeTeamName : string, awayTeamName: string) {
  return prisma.game.create({
    data: {
      homeTeamName,
      awayTeamName
    },
  });
};

async function findOne(id: number) {
  return prisma.game.findFirst({
    where: {
      id
    },
  });
};

async function update(id : number, homeTeamScore : number, awayTeamScore : number) {
  return prisma.game.update({
    where: {
      id
    },
    data: {
      homeTeamScore,
      awayTeamScore,
      isFinished: true,
    }
  });
}

async function findAll() {
  return prisma.game.findMany();
}

async function findOneGameAndBets(id : number) {
  return prisma.game.findFirst({
    where: {
      id,
    },
    include: {
      bets: true
    }
  })
}

const gameRepository = {
  create,
  findOne,
  update,
  findAll,
  findOneGameAndBets,
}

export default gameRepository;