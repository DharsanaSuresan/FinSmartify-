<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FINSMARTIFY</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,400,0,0" />
  <link rel="stylesheet" href="general.css">
</head>
<body>
   <div class="container">
      <aside>

         <div class="top">
           <div class="logo">
             <h2> <span class="danger"> FINSMARTIFY</span> </h2>
           </div>
           <div class="close" id="close_btn">
            <span class="material-symbols-sharp">
              close
              </span>
           </div>
         </div>
         <!-- end top -->
          <div class="sidebar">

            <a href="#" class="active">
              <span class="material-symbols-sharp">grid_view </span>
              <h3>Dashbord</h3>
           </a>
           <a href="#">
              <span class="material-symbols-sharp">insights </span>
              <h3>Analytics</h3>
           </a>
           <a href="#">
              <span class="material-symbols-sharp">report_gmailerrorred </span>
              <h3>Reports</h3>
           </a>
           <a href="#">
              <span class="material-symbols-sharp">logout </span>
              <h3>logout</h3>
           </a>



          </div>

      </aside>
      <!-- --------------
        end asid
      -------------------- -->

      <!-- --------------
        start main part
      --------------- -->

      <main>
           <h1>Dashbord</h1>

        <div class="current-date">
            <p id="current-date"></p>
        </div>


        <div class="insights">

           <!-- start seling -->
          <div class="sales">
              <span class="material-symbols-sharp">trending_up</span>
              <div class="middle">
                  <div class="left">
                      <h3>Total Expenses</h3>
                      <h1 id="total-expenses">$0</h1> <!-- Placeholder for total expenses -->
                  </div>
                  <div class="progress">
                      <svg>
                          <circle  r="30" cy="40" cx="40"></circle>
                      </svg>
                      <div class="number"><p>80%</p></div>
                  </div>
              </div>
              <!-- <small>last 24 hour </small> -->
          </div>
           <!-- end seling -->
              <!-- start expenses -->
              <div class="expenses">
                <span class="material-symbols-sharp">local_mall</span>
                <div class="middle">

                  <div class="left">
                    <h3>Total Saving</h3>
                    <h1>$25,024</h1>
                  </div>
                   <div class="progress">
                       <svg>
                          <circle  r="30" cy="40" cx="40"></circle>
                       </svg>
                       <div class="number"><p>80%</p></div>
                   </div>

                </div>
                <small>Last 24 Hours</small>
             </div>
            <!-- end seling -->
               <!-- start seling -->
               <div class="income">
                <span class="material-symbols-sharp">stacked_line_chart</span>
                <div class="middle">

                  <div class="left">
                    <h3>Total budget</h3>
                    <h1>$25,024</h1>
                  </div>
                   <div class="progress">
                       <svg>
                          <circle  r="30" cy="40" cx="40"></circle>
                       </svg>
                       <div class="number"><p>80%</p></div>
                   </div>

                </div>
                <small>Last 24 Hours</small>
             </div>
            <!-- end seling -->

        </div>
       <!-- end insights -->
      <div class="recent_order">
        <body>
        <h2>Expense Tracker</h2>
        <div class="input-section">
            <label for="category-select">Category:</label>
            <select id="category-select">
                <option value="Food & Beverage">Food & Beverage</option>
                <option value="Rent">Rent</option>
                <option value="Transport">Transport</option>
                <option value="Relaxing">Relaxing</option>
            </select>
            <label for="amount-input">Amount:</label>
            <input type="number" id="amount-input">
            <label for="date-input">Date:</label>
            <input type="date" id="date-input">
            <button id="add-btn">Add</button>
        </div>
        <div class="expenses-list">
            <h2>Expenses List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody id="expnese-table-body">

                </tbody>
                <tfoot>
                    <tr>
                        <td>Total:</td>
                        <td id="total-amount"></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
      </div>
        <div class="graph">
            <h2>Expenses and Saving (last 12 months)</h2>
            <canvas  id="myChart"  ></canvas>
        </div>

      </main>
      <!------------------
         end main
        ------------------->

      <!----------------
        start right main 
      ---------------------->
    <div class="right">

<div class="top">
   <button id="menu_bar">
     <span class="material-symbols-sharp">menu</span>
   </button>

   <div class="theme-toggler">
     <span class="material-symbols-sharp active">light_mode</span>
     <span class="material-symbols-sharp">dark_mode</span>
   </div>
    <div class="profile">
       <div class="info">
           <p><b>Name</b></p>
           <p>User</p>
           <small class="text-muted"></small>
       </div>
       <div class="profile-photo">
         <img src="static/profile.jpg" alt=""/>
       </div>
    </div>
</div>

  <div class="recent_updates">
     <h2>Goal Progress</h2>
   <div class="updates">
      <div class="update">
         
   </div>
   </div>
  </div>


   <div class="sales-analytics">
     <h2>Sales Analytics</h2>

      <div class="item onlion">
        <div class="icon">
          <span class="material-symbols-sharp">shopping_cart</span>
        </div>
        <div class="right_text">
          <div class="info">
            <h3></h3>
            <small class="text-muted">Last seen 2 Hours</small>
          </div>
          <h5 class="danger">-17%</h5>
          <h3>3849</h3>
        </div>
      </div>
      <div class="item onlion">
        <div class="icon">
          <span class="material-symbols-sharp">shopping_cart</span>
        </div>
        <div class="right_text">
          <div class="info">
            <h3>Onlion Orders</h3>
            <small class="text-muted">Last seen 2 Hours</small>
          </div>
          <h5 class="success">-17%</h5>
          <h3>3849</h3>
        </div>
      </div>
      <div class="item onlion">
        <div class="icon">
          <span class="material-symbols-sharp">shopping_cart</span>
        </div>
        <div class="right_text">
          <div class="info">
            <h3>Onlion Orders</h3>
            <small class="text-muted">Last seen 2 Hours</small>
          </div>
          <h5 class="danger">-17%</h5>
          <h3>3849</h3>
        </div>
      </div>
</div>

      <div class="item add_product">
            <div>
            <span class="material-symbols-sharp">add</span>
            </div>
     </div>
</div>
</div>   
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="chart.js"></script>
</body>
</html>
