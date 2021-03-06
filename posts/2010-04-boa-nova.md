---
title: Boa nova
date: 2010-04-30T05:48:27+00:00
url: /2010/04/boa-nova/
tags:
  - bcc
  - burocracia
  - computação
  - congregação
  - fuvest
  - ime
  - usp
  - vestibular
---

Resolvi fazer Ciência da Computação há muito tempo. Faz tanto tempo que eu não lembro quando foi, mas acho que eu tinha uns oito anos. Minha única certeza é que eu não fazia ideia do que era o curso (mas isso não importa — hoje acho que escolhi estudar uma das coisas mais legais que existem).

O tempo passou e cogitei fazer outras faculdades, mas nunca seriamente. Começou o 3º ano do Ensino Médio e comparei os currículos de <acronym title="Universidade Federal de Santa Catarina">UFSC</acronym>, <acronym title="Universidade Estadual de Campinas">UNICAMP</acronym>, <acronym title="Instituto de Ciências Matemáticas e Computação da Universidade de São Paulo">ICMC-USP</acronym> e <acronym title="Instituto de Matemática e Estatística da Universidade de São Paulo">IME-USP</acronym> pra decidir que curso escolher. Ordenei-os (por motivos teóricos) da seguinte forma:

1. IME-USP
2. ICMC-USP
3. IC-UNICAMP (engenharia)
4. UFSC

Desde lá minha meta foi entrar no lugar onde hoje, felizmente, estou. Mas não foi fácil.

Passei o último ano do Ensino Médio <del>namorando</del> <ins>estudando</ins>, li os <del>resumos dos</del> livros exigidos e quando chegou novembro… não passei na primeira fase do vestibular da <acronym title="Fundação Universitária para o Vestibular">Fuvest</acronym>.

<span style="color:#999;">(Felizmente passei na UFSC e vivi um ano sensacional. Morava do lado da Universidade, fiz grandes amigos, conheci professores do mais alto nível, me classifiquei pra final mundial da Maratona de Programação e aprendi mais Matemática do que em toda a vida. Mas nem todos têm a mesma sorte.)</span>

O vestibular da USP usa um <del>terrível</del> sistema baseado em carreiras.

**Def.** Carreiras são conjuntos disjuntos não-vazios de cursos universitários que em geral tem algo em comum (e.g., uma carreira pode ter _Engenharia de Produção_ e _Ciência da Computação_ porque ambos são cursos pra seres humanos — não sei se poderia haver alguma outra razão mais específica, sem ser através da [Lei dos Cinco][1], mas creio que não).

No sistema da USP o candidato escolhe uma carreira, cursos que gostaria de fazer nessa carreira e sua ordem de preferência.

Passam pra segunda fase do vestibular três vezes o número de vagas disponíveis na carreira. Depois da segunda fase, os candidatos são ordenados de acordo com a nota da segunda fase e roda-se um algoritmo assim:

```cpp
for (int pos = 0; tem_vagas_sobrando() && pos < n; pos++) {
    for (int opcao = 0; opcao < 4; opcao++) {
        if (tem_vagas_no_curso(pessoa[pos].opcao[opcao])) {
            da_vaga(pessoa[pos], pessoa[pos].opcao[opcao]);
            break;
        }
    }
}
```

<small>Estava com sono e dificuldade de pensar quando postei. Outra hora tento passar pra uma língua menos nerd.</small>

São os institutos que decidem em que carreira seus cursos vão entrar e o negócio fica uma bagunça. A maioria das carreiras têm cursos iguais com diferença apenas de período (diurno e noturno), mas há carreiras de institutos inteiros (a FEA, por exemplo, tem apenas uma carreira onde coloca Economia [diurno e noturno], Administração [diurno e noturno], Ciências contábeis [diurno e noturno] e Bacharelado em Ciências Atuariais), de cursos iguais em diferentes campi (na carreira de Direito, por exemplo, o candidato pode escolher entre o Largo São Francisco e Ribeirão Preto) e, por fim, carreiras como a minha: **Engenharia na Escola Politécnica e Computação**, que oferece (versão Fuvest 2010):

- Engenharia Civil e Engenharia Ambiental (poli)
- Engenharia Elétrica (ênfases: Automação e controle, energia e automação elétricas, sistemas eletrônicos, telecomunicações) (poli)
- Engenharia Mecânica e Engenharia Naval (poli)
- Engenharia Química, Engenharia Metalúrgica, Engenharia de Materiais, Engenharia de Minas e Engenharia de Petróleo (poli)
- Engenharia de Computação e Engenharia Elétrica (ênfase Computação) (poli)
- Engenharia Mecânica - Automação e Sistemas (Mecatrônica) (poli)
- Engenharia de Produção (poli)
- **Bacharelado em Ciência da Computação (IME!)**

Reza a lenda que essa era uma carreira que tinha todos os cursos que classificam como Exatas (uma classificação ridícula, na minha opinião) e todos eles foram saindo, até que no meu ano sobraram só as engenharias da Poli e o BCC.

(E eu prefiro acreditar nisso porque me doeria acreditar o contrário -- aceitar que em certo momento da História algum <del>idiota</del> <ins>professor</ins> decidiu que Ciência da Computação tem mais a ver com Engenharia Ambiental do que com Matemática.)

Agora veja o problema: Em um ano aqui, aprendi que trabalhar em bancos está na moda em São Paulo. Como se formar em engenharia na Escola Politécnica é garantia desse nobre emprego, fazem um monte de cursinhos (e turmas especiais neles) voltados a [<del>destruir o cérebro das</del> <ins>ensinar</ins> crianças][2] <small>(o link é bom; clique!)</small> pra <del>jihad</del> <ins>passar na Fuvest</ins>. O resultado é que um catarinense que quer entrar no Bacharelado em Ciência da Computação não consegue nem passar da primeira fase do concurso. Se passa pra segunda fase, ainda assim precisa competir com estudantes que colocaram o BCC na quarta opção para não decepcionar os pais e seu ego caso não passem nas três engenharias que desejam.

E não para por aí.

O BCC abre 50 vagas por ano e neste ano matricularam-se 31 calouros. Os alunos da turma (para a qual dou monitoria da disciplina _Introdução à Computação_) me contaram que tem 26 pessoas indo assistir as aulas. Enquanto há jovens no Brasil inteiro querendo entrar neste curso, que considero um dos melhores (se não o melhor) do país, a sala da turma de 2010 está com **metade de sua capacidade** porque gente que queria fazer engenharia marcou a opção do BCC e não fez a matrícula.

A solução imediata é óbvia: tirar o Bacharelado em Ciência da Computação da carreira da Escola Politécnica.

Felizmente, não sou o único que penso isso. Então, após todo esse preâmbulo, informo em primeira mão: a Congregação do Instituto de Matemática e Estatística, em sessão ordinária realizada hoje (29/04) da qual tive o enorme prazer de participar, aprovou por unanimidade essa decisão, que já havia sido aprovada (também por unanimidade) dentro do Departamento de Computação.

Será criada nesse ano na Fuvest uma carreira chamada _“Bacharelado em Ciência da Computação”_, que a princípio terá 50 vagas, mas para a qual será convidado o Bacharelado em Ciência da Computação do ICMC-USP (São Carlos).

A decisão é fantástica e será fundamental pra vida de diversos futuros estudantes desta faculdade. Já estou ansioso pelo ano que vem...

[1]: http://principiadiscordia.com/book/23.php
[2]: http://www.youtube.com/watch?v=M_bvT-DGcWw
