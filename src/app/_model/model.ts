export class Titre {

  constructor(
    public id: string,
    public name: string,
    public description : string = "",
    public genre : string,
    public annee : number,
    public nomFichier : string,
    public nomImage : string = "",
    public vue : number = 0,
    public rate: number[] = []
  )
  {}

}

export class Album{
  constructor(
    public name: string,
    public annee:number,
    public titres:Titre[]
  )
  {}
}

export class Playlist{
  constructor(public nom:string, public titres:Titre[]=[]) {
  }
}

export class User{
  public id : string;
  public avatar:string = '';
  public preferences : string[] = [];
  public sauvegardes : Titre[] = [];
  public playlists : Playlist[] = [];

  constructor(public fullname:string,
              public age: number,
              public sex: string,
              public userName: string,
              public userEmail:string,
              public password:string,
              public role : string
  )
  {
    this.id = userName;// Math.round(Math.random()*1000) + fullname.slice(0, 3) + age;
  }



}

export class Artist extends User{
  constructor(
    public idArtiste:string,
    public titres : Titre[],
    public albums : Album[],
    fullname:string,
    age: number,
    sex: string,
    userName: string,
    userEmail:string,
    password:string,
    role:string

  )
  {
    super(fullname, age, sex, userName, userEmail, password, role);
  }
}
