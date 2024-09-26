using CodingConnected.YAVC.Models;
using System;

namespace TestApp_2.Components.Models.Tabs
{
    public abstract class TabStateBase : IDisposable
    {
        public abstract string TabName { get; }
        public string IntersectionName => IntersectionConfigExtraData.FriendlyName ?? IntersectionConfig.Name;
        public IntersectionConfiguration IntersectionConfig;
        public IntersectionConfigurationExtraData IntersectionConfigExtraData;
        public event EventHandler StateChanged;
        public bool Disposed;
        public void RaiseStateChanged(object sender)
        {
            StateChanged?.Invoke(sender, EventArgs.Empty);
        }

        public void Dispose()
        {
            Disposed = false;
        }
    }
}
