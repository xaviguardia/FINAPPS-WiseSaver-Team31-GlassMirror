using Microsoft.Web.Infrastructure.DynamicModuleHelper;
using SoundInTheory.DynamicImage;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(instacollect.App_Start.DynamicImage), "PreStart")]

namespace instacollect.App_Start
{
	public static class DynamicImage
	{
		public static void PreStart()
		{
			DynamicModuleUtility.RegisterModule(typeof(DynamicImageModule));
		}
	}
}