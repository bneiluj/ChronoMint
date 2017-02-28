import AbstractContractDAO from './AbstractContractDAO';

class AbstractProxyDAO extends AbstractContractDAO {
    constructor(json, at = null) {
        debugger;
        super(json, at);
        if (new.target === AbstractProxyDAO) {
            throw new TypeError('Cannot construct AbstractProxyDAO instance directly');
        }
    }

    getLatestVersion = () => {
        return this.contract.then(deployed => deployed.getLatestVersion.call());
    };

    getName = () => {
        return this.contract.then(deployed => deployed.name.call());
    };

    getSymbol = () => {
        return this.contract.then(deployed => deployed.symbol.call());
    };

    totalSupply = () => {
        return this.contract.then(deployed => deployed.totalSupply.call().then(supply => {
            return supply.toNumber();
        }));
    };

    getAccountBalance = (account) => {
        return this.contract.then(deployed => deployed.balanceOf.call(account));
    };
}

export default AbstractProxyDAO;