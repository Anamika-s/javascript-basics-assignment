/* Write a program to build a `Pyramid of stars` of given height */

 
	const buildPyramid = (n) => {
     // Write my code here
     let s = "";
     for(var i=1;i<=n;i++){
     for(var j=n;j>=i;j--)
     {
        s +=" ";  
     }
     s +="*";
     for(var k=2;k<=i;k++)
     {
          s +=" *";
     }
     s +="  \n";
}
return s;
};

 

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
