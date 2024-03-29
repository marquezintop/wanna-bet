import { prisma } from "../config/database";

async function create(name: string, balance: number) {
  return prisma.participant.create({
    data: {
      name,
      balance,
    },
  });
};

async function findOne(id: number) {
  return prisma.participant.findFirst({
    where: {
      id
    },
  });
};

async function updateBalance(id: number, newBalance: number) {
  return prisma.participant.update({
    where: {
      id,
    },
    data: {
      balance: newBalance,
    },
  });
};

async function findAll() {
  return prisma.participant.findMany();
}

const participantRepository = {
  create,
  findOne,
  updateBalance,
  findAll,
}

export default participantRepository;