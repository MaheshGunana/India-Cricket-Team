var playerDetails = [
    {id:1,name:'Rohit Sharma (C)',role:'Batsman (RHB)',position:'Top order',rank:2,best:264, age:37, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOVcm0P0dWATvQvBhgxH4tKKoRzPZXdPNffQ&usqp=CAU"},
    {id:2,name:'Shubman Gill',role:'Batsman (RHB)',position:'Top order',rank:3,best:208, age:25, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5VqMdHRz1yx_iSD_e6yL_fHnFj05DUHyHg&usqp=CAU"},
    {id:3,name:'Virat Kohli',role:'Batsman (RHB)',position:'1-down',rank:4,best:183, age:36, image:"data:image/jpeg;base64,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"},
    {id:4,name:'Shreyas Iyer',role:'Batsman (RHB)',position:'2-down',rank:13,best:'128',age:29, image:'https://media.gettyimages.com/id/1794796539/photo/mumbai-india-shreyas-iyer-of-india-celebrates-after-scoring-a-century-during-the-icc-mens.jpg?s=612x612&w=0&k=20&c=LBOchCpMOufBlN4VspLNIA-iFCNTnE-3Y3SdA1aYokc='},
    {id:5,name:'KL Rahul (WK)',role:'Batsman (RHB)',position:'3-down',rank:23,best:22, age:32, image:"https://media.gettyimages.com/id/1713124862/photo/thiruvananthapuram-india-kl-rahul-of-india-poses-for-a-portrait-ahead-of-the-icc-mens-cricket.jpg?s=612x612&w=0&k=20&c=gBxk6NjghoNezn1VTCRwCilVc8Pq1CZMh1G9522QwBw="},
    {id:6,name:'Surya Kumar Yadav',role:'Batsman (RHB)',position:'4th-down',rank:5,best:72,age:34 , image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRshrf-gct_F4Vk9046KWLWRemxDJ1JZK2A&usqp=CAU',age:32},
    {id:7,name:'Hardik Pandya',role:'Allrounder (RHB)',position:'5th-down',rank:23,best:92, age:31, image:"data:image/jpeg;base64,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"},
    {id:8,name:'Ravindra Jadeja',role:'Allrounder (LHB)',position:'6th-down',rank:9,best:'5/36',age:35, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6vdHQmmg14LCngXixhp9XQxOoDHNzjyyug&usqp=CAU"},
    {id:9,name:'Kuldeep Yadav',role:'Bowler (RHB)',position:'lower-order',rank:12,best:'4/25',age:29, image:"https://media.gettyimages.com/id/1243884019/photo/delhi-india-kuldeep-yadav-of-india-celebrates-the-wicket-of-marco-jansen-of-south-africa.jpg?s=612x612&w=0&k=20&c=W_3P_PCclFpg3X_Re7V1-huMInmCpCi6-2TkgeoPenY="},
    {id:10,name:'Mohammed Shami',role:'Bowler (RHB)',position:'lower-order',rank:3,best:'5/69',age:34, image:"data:image/jpeg;base64,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"},
    {id:11,name:'Jasprit Bumrah',role:'Bowler (RHB)',position:'lower-order',rank:1,best:'6/19',age:30, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixhZaZYekJ8ZC9nPGMhdGym_s12S2wOH_ng&usqp=CAU"}
]

function bodyload(){
    for(var player of playerDetails){ 
        var div = document.createElement('div');
        div.className = 'card m-2 p-2';
        div.style.width = '292px';
        div.innerHTML = `
        <img src=${player.image} class="card-img-top" height="220">
        <div class="card-header">
            <h4>${player.name}</h4>
        </div>
        <div class="card-body" style="height:80px">
            <dl class="d-flex justify-content-between">
                <div>
                    <dt><i>Playing Role</i></dt>
                    <dd>${player.role}</dd>
                </div>
               <div>
                <dt>Rank</dt>
                <dd id='rank'>${player.rank}</dd>
               </div>
            </dl>
        </div>
        <div class="card-footer">
            <dt>Position</dt>
            <dd>${player.position}</dd>
            <dt>Best</dt>
            <dd>${player.best}</dd>
            <dt>Age</dt>
            <dd>${player.age}</dd>
        </div>`
        document.getElementById('cardContainer').appendChild(div);
    }
}