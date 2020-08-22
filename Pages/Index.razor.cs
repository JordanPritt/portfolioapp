using System;
using System.Threading;
using System.Collections.Generic;

namespace PortfolioApp.Pages
{
    public partial class Index
    {
        private static List<string> desc = new List<string>()
        {
            "Agile",
            "SOLID Principles",
            "Software Architecture",
            "UI/UX",
            "Web Development"
        };
        private static string message = "";
        private static string toType = "Software Development";
        private static int charIndex = 0;
        private static System.Timers.Timer aTimer;

        protected override void OnInitialized()
        {
            int seconds = 525;
            var timer = new Timer(TypeMessage, null, 0, seconds);
        }

        protected void TypeMessage(object o)
        {
            if (aTimer is null)
            {
                aTimer = new System.Timers.Timer(500);
                aTimer.Elapsed += (sender, args) =>
                {
                    if (charIndex < toType.Length)
                    {
                        message = message + toType[charIndex];
                        charIndex++;
                    }
                    else
                    {
                        int random = new Random().Next(0,4);
                        charIndex = 0;
                        message = string.Empty;
                        toType = desc[random];
                    }
                    InvokeAsync(StateHasChanged);
                };
                aTimer.AutoReset = true;
                aTimer.Enabled = true;
            }
            else
            {
                aTimer.Stop();
                aTimer.Dispose();
                aTimer = null;
            }
        }
    }
}
