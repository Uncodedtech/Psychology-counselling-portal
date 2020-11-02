<style>
  table,th,td{
            border: 1px solid black;
            width: 700px;
            background: lightblue;
            margin-left: auto;
            margin-right: auto;
        }
    .btn{
            width: 20%;
            height: 5%;
            padding: 15px;
            font-weight: bold;
                                                
            

         }  

    .container{

      width: 100%;
    text-align:center;
    }     
    </style>    


<!-- ======= Appointment Section ======= -->
<section id="appointment" class="appointment section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Check Doctors ? </h2>
          <p> Get a list of doctors nearby you who can assist you. Each and every doctor is very well qualified and you can get in touch with them at anytime. They are here to help you so can freely share your feelings with the doctors.</p>
        </div>

        <form action="" method="POST">
              
              <table  >
              <tr>
                  <th> DISORDER </th>
                  <th> Doctor Mob/loc </th>
              </tr>    <br><br><br> 
              <input type="text" name="disorder" class="btn" placeholder= "Enter disorder" >
              <input type="submit" name="search" class="btn" value="SEARCH "><br><br><br>           
               </form>
      
    
      <?php
          $connection = mysqli_connect("localhost:3307","root","");
          $db= mysqli_select_db($connection, 'semdb');
      
      if(isset($_POST['search']))
      {
          $disorder = $_POST["disorder"];
    
          $query=" select * from doctor_info where Disorder_Name like '$disorder%'";
          $query_run = mysqli_query($connection,$query) ;
    
          if(mysqli_num_rows($query_run)>0)
      {
          while($row = mysqli_fetch_array($query_run))  
          {
    
              ?>
              <tr>
                  <td> <?php echo $row['Disorder_Name'] ?>  </td>
                  <td> <?php echo $row['Doctor_Mob/Loc'] ?>  </td>
              </tr>

              <?php
          } 

      }
    
      else{
    
          echo "No such disorder found in database!!<br><br>";
          }
    
      }

    ?>  

    </table>

      </div>

    </section>
    
    <!-- End Appointment Section -->
