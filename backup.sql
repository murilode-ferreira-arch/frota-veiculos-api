create extension if not exists "uuid-ossp"

create table veiculos(
id uuid primary key default uuid_generate_v4(),
    nome varchar(100) not null,
    marca varchar(50) not null,
    ano integer not null
	placa varchar(8) not null
)
