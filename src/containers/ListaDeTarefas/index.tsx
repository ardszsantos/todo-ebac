import Tarefa from '../../components/Tarefa'
import * as S from './styles'

const tarefas = [
  {
    titulo: 'Estudar',
    descricao: 'Ver',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar',
    descricao: 'Baixar',
    prioridade: 'urgente',
    status: 'concluida'
  },
  {
    titulo: 'ir',
    descricao: 'fazer',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <S.Container>
    <p>2 tarefas marcadas como: categoria e termo</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </S.Container>
)

export default ListaDeTarefas
