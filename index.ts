interface IConta {
    nomeTitular: string,
    saldo?: number,
}

class Conta {
    private nomeTitular: string;
    private saldo: number;
    private ativa: boolean = true;

    constructor({
        nomeTitular,
        saldo = 0
    }: IConta) {
        this.nomeTitular = nomeTitular,
            this.saldo = saldo
        console.log("Bem Vindo ao DIO-Bank")
    }

    meuSaldo = (): number => this.saldo //Definindo que essa função só retorna um valor number.

    depositar = (valor: number): void => {
        if (this.ativa) {
            this.saldo += valor;
        }else{
            console.log("Essa conta foi desativada!");
        }
    }

    sacar = (valor: number): void => {
        if (this.ativa) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                console.log(`Você sacou ${valor} e seu novo saldo é de ${this.saldo}`);
            } else {
                console.log(`Valor indisponivel para saque, seu saldo é de ${this.saldo}`);
            }
        }else{
            console.log("Essa conta foi desativada!");
        }
    }

    cancelarConta = () => {
        if (this.saldo === 0) {
            this.ativa = false;
            console.log("Conta cancelada com Sucesso!!!");
            return this.ativa;
        }

        console.log("Erro no cancelamento da conta, por favor verifique o seu saldo!")
    }

    depositoEmOutraConta = (destino: Conta, valor: number): void => {
        if(this.saldo > valor){
            destino.depositar(valor);
            this.saldo -= valor;
        }else{
            console.log("Não foi possivel fazer o depósito. Saldo indisponivel!")
        }
        
    }

}

const contaA: Conta = new Conta({ nomeTitular: 'Vitor' }); //Garantindo que minha variavel contaA vai ser do tipo Conta.
const contaB: Conta = new Conta({ nomeTitular: 'Vilela', saldo:100 });

contaA.depositar(20);

console.log(contaA.meuSaldo());
console.log(contaB.meuSaldo());

contaA.depositoEmOutraConta(contaB, 10);

console.log(contaA.meuSaldo());
console.log(contaB.meuSaldo());
