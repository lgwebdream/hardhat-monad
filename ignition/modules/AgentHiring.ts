// ignition/modules/AgentHiringModule.ts
import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const AgentHiringModule = buildModule('AgentHiringModule', (m) => {
  // Sepolia USDT address - can be overridden when deploying
  const usdtAddress = m.getParameter(
    'usdtAddress',
    '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0'
  );

  // Deploy AgentHiringContract with USDT address
  const agentHiringContract = m.contract('AgentHiringContract', [usdtAddress]);

  return { agentHiringContract };
});

export default AgentHiringModule;
